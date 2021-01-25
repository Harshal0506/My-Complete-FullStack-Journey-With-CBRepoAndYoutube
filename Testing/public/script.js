$(()=>{
	let kmBox=$('#km');
	let minBox=$('#min');
	let calcBtn=$('#calcfare');
	let fareDiv=$('#fare');
	let rateBtn=$('#getrates');
	let rateDiv=$('#rates');
	
	calcBtn.click(()=>{
		$.post('/calcfare',{
			km:kmBox.val(),
			min:minBox.val()
		},(data)=>{
			fareDiv.text('Fare :'+data.fare)
		})
	})
	
	rateBtn.click(()=>{
		$.get('/rate',(data)=>{
			let prettyRateData=`
			Fixed Fare = Rs. ${data.fixed} for ${data.minKm} KM
            <br>
            Fare (Distance) = Rs. ${data.perKm} / KM
            <br>
            Fare (Waiting) = Rs. ${data.perMin} / min (after first ${data.freeMin} min)

			`
			rateDiv.html(prettyRateData);
		})
	})
})