import React from 'react'

const Head = (props) =>(
  <head>
    <title>{props.title} - {props.siteName}</title>
    <meta name="description" content={props.description}/>
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="bower_components/bootstrap-css/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/responsiveslides.css"/>
    <link rel="stylesheet" href="css/themes.css"/>
    <link rel="stylesheet" href="css/main.css"/>
    <script src="js/jquery-2.1.4.js"></script>
  </head>
);

export default Head