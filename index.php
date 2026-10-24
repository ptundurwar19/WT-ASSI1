<!DOCTYPE html>
<html>
<head>
    <title>Electricity Bill Calculator</title>

    <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial, Helvetica, sans-serif;
        }

        body{
            background:#f2f2f2;
        }

        .navbar{
            background:#0066cc;
            color:white;
            padding:15px;
            text-align:center;
            font-size:28px;
            font-weight:bold;
        }

        .container{
            width:500px;
            margin:40px auto;
            background:white;
            padding:25px;
            border-radius:10px;
            box-shadow:0px 0px 10px gray;
        }

        h2{
            text-align:center;
            color:#0066cc;
            margin-bottom:20px;
        }

        label{
            display:block;
            margin-top:15px;
            font-weight:bold;
        }

        input,
        textarea,
        select{

            width:100%;
            padding:10px;
            margin-top:5px;
            border:1px solid gray;
            border-radius:5px;
            font-size:15px;

        }

        textarea{
            resize:none;
        }

        button{

            width:100%;
            padding:12px;
            margin-top:25px;
            background:#0066cc;
            color:white;
            border:none;
            border-radius:5px;
            cursor:pointer;
            font-size:17px;

        }

        button:hover{

            background:#004d99;

        }

        footer{

            background:#0066cc;
            color:white;
            text-align:center;
            padding:15px;
            margin-top:30px;

        }

    </style>

</head>

<body>

<div class="navbar">
    Electricity Bill Management System
</div>

<div class="container">

<h2>Consumer Details</h2>

<form action="bill.php" method="POST">

<label>Consumer Type</label>

<select name="type" required>

<option value="">Select Consumer Type</option>
<option>Residential</option>
<option>Commercial</option>
<option>Industrial</option>

</select>

<label>Consumer Name</label>

<input
type="text"
name="name"
placeholder="Enter Name"
required>

<label>Address</label>

<textarea
name="address"
rows="4"
placeholder="Enter Address"
required></textarea>

<label>Mobile Number</label>

<input
type="text"
name="mobile"
maxlength="10"
placeholder="Enter Mobile Number"
required>

<label>Units Consumed</label>

<input
type="number"
name="units"
placeholder="Enter Units"
required>

<button type="submit">
Calculate Bill
</button>

</form>

</div>

<footer>

&copy; 2026 Electricity Bill Management System

</footer>

</body>
</html>