<?php

include("db.php");

$result = mysqli_query($conn,"SELECT * FROM bills ORDER BY id DESC");

?>

<!DOCTYPE html>
<html>

<head>

<title>View Bills</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial;
}

body{
    background:#f2f2f2;
}

.header{

    background:#0066cc;
    color:white;
    padding:15px;
    text-align:center;
    font-size:28px;
    font-weight:bold;

}

.container{

    width:95%;
    margin:30px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0px 0px 10px gray;

}

h2{

    text-align:center;
    color:#0066cc;
    margin-bottom:20px;

}

table{

    width:100%;
    border-collapse:collapse;

}

th{

    background:#0066cc;
    color:white;
    padding:12px;

}

td{

    text-align:center;
    padding:12px;
    border:1px solid lightgray;

}

tr:nth-child(even){

    background:#f9f9f9;

}

.btn{

    margin-top:20px;
    padding:12px 25px;
    background:#0066cc;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
    font-size:16px;

}

.btn:hover{

    background:#004d99;

}

</style>

</head>

<body>

<div class="header">

Electricity Bill Management System

</div>

<div class="container">

<h2>Saved Electricity Bills</h2>

<table>

<tr>

<th>ID</th>
<th>Consumer Type</th>
<th>Name</th>
<th>Address</th>
<th>Mobile</th>
<th>Units</th>
<th>Bill Amount</th>
<th>Date</th>

</tr>

<?php

while($row=mysqli_fetch_assoc($result))
{

?>

<tr>

<td><?php echo $row['id']; ?></td>

<td><?php echo $row['consumer_type']; ?></td>

<td><?php echo $row['name']; ?></td>

<td><?php echo $row['address']; ?></td>

<td><?php echo $row['mobile']; ?></td>

<td><?php echo $row['units']; ?></td>

<td>₹<?php echo number_format($row['bill_amount'],2); ?></td>

<td><?php echo $row['created_at']; ?></td>

</tr>

<?php

}

?>

</table>

<br>

<center>

<button class="btn" onclick="window.location.href='index.php'">

Calculate New Bill

</button>

</center>

</div>

</body>
</html>