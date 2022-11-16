// function submitData() {
// 	console.log('step 1 berhasil')
// 	let name = document.getElementById("name").value
// 	let email = document.getElementById("email").value
// 	let phonenumber = document.getElementById("phonenumber").value
// 	let subject = document.getElementById("subject").value
// 	let message = document.getElementById("message").value
// 	console.log(nana, email, phonenumber, subject, message)

// 	let emailReceiver = 'sayagktau@gmail.com'
// 	let link = document.createElement('a')
// 	link.href = `mailto:${emailReceiver}?subject=${object}&body=hallo nama saya ${name}`
// }

function validateForm() {
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile").value;
	var subject = document.getElementById("subject").value;
	var desc = document.getElementById("desc").value;

	if (
		nama != "" &&
		email != "" &&
		mobile != "" &&
		subject != "" &&
		desc != ""
	) {
		alert(
			"Nama: " +
				nama +
				"\n" +
				"Email: " +
				email +
				"\n" +
				"No Hp: " +
				mobile +
				"\n" +
				"Pekerjaan: " +
				subject +
				"\n" +
				"Description: " +
				desc
		);
	} else {
		alert("Anda harus mengisi data dengan lengkap !");
	}
}
