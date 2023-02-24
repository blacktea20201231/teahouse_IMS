export default function startPage() {
  const sp =`
  <div class="container w-25 mt-5">

  <div class="input-group mb-3">
    <div class="input-group my-2">
      <span class="input-group-text">帳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號</span>
      <input type="text" class="form-control">
    </div>
    <div class="input-group my-2">
      <span class="input-group-text">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼</span>
      <input type="password" class="form-control">
    </div>
  </div>

  <div class="button d-flex justify-content-center mt-5">
    <button class="btn-dark mx-3">登入</button>
  </div>
`;
  return sp;
}
