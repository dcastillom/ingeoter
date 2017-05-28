<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ingeoter');

/** MySQL database username */
define('DB_USER', 'ingeoter');

/** MySQL database password */
define('DB_PASSWORD', 'ingeoter');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yTo1&X;aqA5|Fgo#zynrfD:j!8-jT]9g +RG7apQr=;7_.qS[Wmb[p-7fN&)5X=d');
define('SECURE_AUTH_KEY',  'gb2g%<^qhSK#$sB:l^4[p0)@F={h-1SsomORk /K34#.d9MopRx?OxbF>f47U<Ix');
define('LOGGED_IN_KEY',    'Vka6+<m_;C!{E4q$o:?FW,E-|TAe]2w%FeP=_*q`0^Or,D+Ngk$naR/Pr|r3y1=]');
define('NONCE_KEY',        'sUmy*/!0,8@KF|)3qfz?Dw^2xh2@m=o9Gt)<S+imMUeybdTT/?6<l1M?*v{:nBWB');
define('AUTH_SALT',        'kWQ@A4[br28/5=NF1Hh=Xuj%O?`4u[z1=lvY,CqB-<S2WNV?=k?gukJ$QX>z=Y*t');
define('SECURE_AUTH_SALT', '1ahzxH_>,Ovg/U&W*SD!C^mbMZqJ?iMtxeq/~nIsq{3,9UxH83!:052o<c^e7I=Y');
define('LOGGED_IN_SALT',   '9dt*!|3p//qkLEUm9WI,`)F,A*cno6i9_f?[:CfUtTEAV^_U*&~57-cP5b5!mB0f');
define('NONCE_SALT',       '8ZhA(1[tt<P 2ZK -J5NF-<$/ z2nlz>uf>i>:!r0kNEIviu{_ 9+fQ+$qj=r$4W');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
