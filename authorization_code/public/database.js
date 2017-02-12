function sendUser(uid, email) {
	var userRef = firebase.database().ref('helloworld' + user).set({
		username: display_name,
		email: email
	});
	print('error');

}