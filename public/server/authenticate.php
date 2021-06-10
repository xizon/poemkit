<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

// Decode the jwt token

$verify_token = false;

$token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJ1c2VyX2lkIjoxMjMsInVzZXJfbmFtZSI6ImFkbWluIiwidXNlcl9wYXNzd29yZCI6ImFkbWluIn0.gLP213Yn8njgq7qq8nqw_U-e93f70aBCipnwa0tY0g0';


if ( isset( $_POST[ 'token' ] ) ) {
	$token = $_POST[ 'token' ];
}

if ( isset( $_GET[ 'token' ] ) ) {
	$token = $_GET[ 'token' ];
}


$res_decode = base64_decode(
				str_replace('_', '/', 
				str_replace('-','+',
				explode('.', $token)[1]
				))
			);

$res = json_decode($res_decode);


if ( empty( $res_decode ) ) {
	$verify_token = false;
} else {
	
	//echo $res_decode; // {"name":"John Doe","user_id":123,"user_name":"admin","user_password":"admin"}
	//echo $res -> name; // John Doe
	
	if ( $res -> user_name == 'admin' && $res -> user_password == 'admin' ) {
		$verify_token = true;
	} else {
		$verify_token = false;
	}

}


$RESTful_res = $verify_token ? array(
	"data" => array(
		"user_id" => $res -> user_id,
		"name" => $res -> user_name
	), 
	"message" => "OK", 
	"code" => 200
) : array(
	"error" => "Unauthorized", 
	"code" => 401
);



echo json_encode( $RESTful_res );

