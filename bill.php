<?php

include("db.php");

if($_SERVER["REQUEST_METHOD"]!="POST")
{
    header("Location:index.php");
    exit();
}

$name=$_POST['name'];
$address=$_POST['address'];
$mobile=$_POST['mobile'];
$type=$_POST['type'];
$units=$_POST['units'];

if($units<=100)
{
    $bill=$units*3;
}
elseif($units<=200)
{
    $bill=(100*3)+(($units-100)*5);
}
elseif($units<=300)
{
    $bill=(100*3)+(100*5)+(($units-200)*7);
}
else
{
    $bill=(100*3)+(100*5)+(100*7)+(($units-300)*9);
}

$sql="INSERT INTO bills
(consumer_type,name,address,mobile,units,bill_amount)
VALUES
('$type','$name','$address','$mobile','$units','$bill')";

mysqli_query($conn,$sql);

?>

<!DOCTYPE html>
<html>

<head>

<title>Electricity Bill Receipt</title>

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
    text-align:center;
    padding:15px;
    font-size:28px;
    font-weight:bold;

}

.bill{

    width:650px;
    margin:40px auto;
    background:white;
    padding:30px;
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

td{

    padding:12px;
    border-bottom:1px solid lightgray;

}

.total{

    font-size:22px;
    color:green;
    font-weight:bold;

}

.btn{

    background:#0066cc;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:5px;
    cursor:pointer;
    font-size:16px;

}

.btn:hover{

    background:#004d99;

}

.buttons{

    display:flex;
    justify-content:space-between;
    gap:10px;
    margin-top:20px;

}

@media print{

body{

background:white;

}

.header{

background:white;
color:black;
border-bottom:2px solid black;

}

.bill{

width:100%;
margin:0;
box-shadow:none;
border:2px solid black;

}

.buttons{

display:none;

}

}

</style>

</head>

<body>

<div class="header">

Electricity Bill Management System

</div>

<div class="bill">

<h2>Electricity Bill Receipt</h2>

<table>

<tr>
<td><b>Consumer Name</b></td>
<td><?php echo $name; ?></td>
</tr>

<tr>
<td><b>Consumer Type</b></td>
<td><?php echo $type; ?></td>
</tr>

<tr>
<td><b>Address</b></td>
<td><?php echo $address; ?></td>
</tr>

<tr>
<td><b>Mobile Number</b></td>
<td><?php echo $mobile; ?></td>
</tr>

<tr>
<td><b>Units Consumed</b></td>
<td><?php echo $units; ?></td>
</tr>

<tr>
<td><b>Rate Applied</b></td>
<td>

<?php

if($units<=100)
echo "₹3 per Unit";

elseif($units<=200)
echo "₹5 per Unit";

elseif($units<=300)
echo "₹7 per Unit";

else
echo "₹9 per Unit";

?>

</td>
</tr>

<tr class="total">

<td>Total Bill Amount</td>

<td>₹<?php echo number_format($bill,2); ?></td>

</tr>

</table>

<div class="buttons">

<button class="btn" onclick="window.print()">
Print / Save as PDF
</button>

<button class="btn" onclick="window.location.href='index.php'">
Calculate Another Bill
</button>

<button class="btn" onclick="window.location.href='view.php'">
View Saved Bills
</button>

</div>

</div>

</body>

</html>