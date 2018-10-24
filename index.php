<!DOCTYPE html>

<html dir="ltr">

	<head>
	
		<title>לוח הכפל</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="style.css">
		<link href="https://fonts.googleapis.com/css?family=Mali:400,700" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="script.js"></script>
	</head>
	
	
	<body>

	<?php
		

	?>
	
		<header>



		</header>

		<section>

			<table class='main_table'>
				<?php for($i=1; $i<=10; $i++){ ?>
					<tr class="table_row">
						<?php for($j=1; $j<=10; $j++){ ?>
							<td class="table_data" data-row=<?= $i ?> data-col=<?= $j ?> data-num="<?= $i."*".$j ?>"><?=$i*$j;?></td>
						<?php }; ?>
					<tr/>
				<?php }; ?>
			</table>

		</section>
		
		<footer></footer>
		
	
	</body>
	
</html>