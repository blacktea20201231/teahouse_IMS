<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1f5d088818b493640311fba35d046a9c
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1f5d088818b493640311fba35d046a9c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1f5d088818b493640311fba35d046a9c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1f5d088818b493640311fba35d046a9c::$classMap;

        }, null, ClassLoader::class);
    }
}
