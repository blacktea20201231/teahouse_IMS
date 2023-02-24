-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-02-18 16:24:36
-- 伺服器版本： 10.4.27-MariaDB
-- PHP 版本： 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `erp`
--

DELIMITER $$
--
-- 函式
--
CREATE DEFINER=`root`@`localhost` FUNCTION `IncomeLevel` (`monthly_value` INT) RETURNS VARCHAR(20) CHARSET utf8mb4 COLLATE utf8mb4_general_ci  BEGIN

   DECLARE income_level varchar(20);

   IF monthly_value <= 4000 THEN
      SET income_level = 'Low Income';

   ELSEIF monthly_value > 4000 AND monthly_value <= 7000 THEN
      SET income_level = 'Avg Income';

   ELSE
      SET income_level = 'High Income';

   END IF;

   RETURN income_level;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- 資料表結構 `good`
--

CREATE TABLE `good` (
  `id` varchar(10) NOT NULL,
  `name` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `unit` varchar(10) NOT NULL,
  `safe_stock` int(11) NOT NULL,
  `supplier_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `good`
--

INSERT INTO `good` (`id`, `name`, `price`, `unit`, `safe_stock`, `supplier_id`) VALUES
('G001', '紅茶葉', 100, '包', 100, 'S001'),
('G001', '紅茶葉', 150, '包', 100, 'S002'),
('G002', '綠茶葉', 100, '包', 100, 'S001'),
('G003', '砂糖', 50, '包', 100, 'S001'),
('G004', '牛奶', 225, '罐', 50, 'S001'),
('G004', '牛奶', 285, '罐', 100, 'S002');

-- --------------------------------------------------------

--
-- 資料表結構 `input`
--

CREATE TABLE `input` (
  `id` int(11) NOT NULL,
  `good_id` varchar(20) NOT NULL,
  `input_date` date NOT NULL,
  `amount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `due` date NOT NULL,
  `sup_id` varchar(10) NOT NULL,
  `input_reason` varchar(10) NOT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `input`
--

INSERT INTO `input` (`id`, `good_id`, `input_date`, `amount`, `price`, `due`, `sup_id`, `input_reason`, `note`) VALUES
(4, 'G001', '2023-02-01', 100, 150, '2023-02-17', 'S001', '入庫', NULL),
(5, 'G001', '2023-02-19', 100, 100, '2023-02-28', 'S001', '入庫', NULL);

--
-- 觸發器 `input`
--
DELIMITER $$
CREATE TRIGGER `inv_add` AFTER INSERT ON `input` FOR EACH ROW BEGIN
UPDATE inv
SET inv.inv=(NEW.amount+inv.inv)
WHERE inv.good_id=NEW.good_id AND inv.sup_id=NEW.sup_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- 資料表結構 `inv`
--

CREATE TABLE `inv` (
  `good_id` varchar(10) NOT NULL,
  `sup_id` varchar(10) NOT NULL,
  `inv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `inv`
--

INSERT INTO `inv` (`good_id`, `sup_id`, `inv`) VALUES
('G001', 'S001', 100),
('G001', 'S002', 0),
('G002', 'S001', 0),
('G002', 'S002', 0),
('G003', 'S001', 0),
('G003', 'S002', 0),
('G004', 'S001', 0),
('G004', 'S002', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `output`
--

CREATE TABLE `output` (
  `id` int(11) NOT NULL,
  `good_id` varchar(10) NOT NULL,
  `sup_id` varchar(10) NOT NULL,
  `output_date` date NOT NULL,
  `amount` int(11) NOT NULL,
  `output_reason` varchar(10) NOT NULL,
  `note` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `output`
--

INSERT INTO `output` (`id`, `good_id`, `sup_id`, `output_date`, `amount`, `output_reason`, `note`) VALUES
(3, 'G001', 'S001', '2023-02-12', 50, '出庫', ''),
(4, 'G001', 'S001', '2023-02-20', 50, '出庫', '');

--
-- 觸發器 `output`
--
DELIMITER $$
CREATE TRIGGER `inv_minus` AFTER INSERT ON `output` FOR EACH ROW BEGIN
UPDATE inv
SET inv.inv=(inv.inv-NEW.amount)
WHERE inv.good_id=NEW.good_id AND inv.sup_id=NEW.sup_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- 資料表結構 `supplier`
--

CREATE TABLE `supplier` (
  `id` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `tax_id` varchar(20) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `addr` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `supplier`
--

INSERT INTO `supplier` (`id`, `name`, `tax_id`, `contact`, `tel`, `addr`) VALUES
('S001', '上統食品', '12345678', 'Bob', '0978945612', '高雄'),
('S002', '金品茗茶', '12345687', 'Alex', '0978945678', '台南'),
('S003', '鑫冠茶葉', '32165477', 'Joe', '0978451263', '台北市'),
('S004', '味全', '12345678', 'Paul', '0974185263', '高雄');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `good`
--
ALTER TABLE `good`
  ADD PRIMARY KEY (`id`,`supplier_id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- 資料表索引 `input`
--
ALTER TABLE `input`
  ADD PRIMARY KEY (`id`),
  ADD KEY `good_id` (`good_id`),
  ADD KEY `supplier_id` (`sup_id`);

--
-- 資料表索引 `inv`
--
ALTER TABLE `inv`
  ADD PRIMARY KEY (`good_id`,`sup_id`),
  ADD KEY `sup_id` (`sup_id`);

--
-- 資料表索引 `output`
--
ALTER TABLE `output`
  ADD PRIMARY KEY (`id`),
  ADD KEY `good_id` (`good_id`),
  ADD KEY `supplier_id` (`sup_id`);

--
-- 資料表索引 `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `input`
--
ALTER TABLE `input`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `output`
--
ALTER TABLE `output`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `good`
--
ALTER TABLE `good`
  ADD CONSTRAINT `good_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`);

--
-- 資料表的限制式 `input`
--
ALTER TABLE `input`
  ADD CONSTRAINT `input_ibfk_1` FOREIGN KEY (`good_id`) REFERENCES `good` (`id`),
  ADD CONSTRAINT `input_ibfk_2` FOREIGN KEY (`sup_id`) REFERENCES `supplier` (`id`);

--
-- 資料表的限制式 `inv`
--
ALTER TABLE `inv`
  ADD CONSTRAINT `inv_ibfk_1` FOREIGN KEY (`good_id`) REFERENCES `good` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `inv_ibfk_2` FOREIGN KEY (`sup_id`) REFERENCES `supplier` (`id`) ON UPDATE CASCADE;

--
-- 資料表的限制式 `output`
--
ALTER TABLE `output`
  ADD CONSTRAINT `output_ibfk_1` FOREIGN KEY (`good_id`) REFERENCES `good` (`id`),
  ADD CONSTRAINT `output_ibfk_2` FOREIGN KEY (`sup_id`) REFERENCES `supplier` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
