/* JS Library for Accessing Profile Data */

/*
	If profile is default user or admin profile, 
	use Set variants of functions and do not use Push or SetPush variants.
*/

function Profile(username, email, password, admin=false) {
	this.id = 0
	this.username = username
	this.email = email
	this.password = password
	this.admin = admin
}

function Storage() {
	this.profile = JSON.stringify(sessionStorage.getItem('profile'))
	this.profiles = JSON.stringify(sessionStorage.getItem('profiles'))
}


Storage.prototype = {
	createDefaultUser: function() {
		/*
			Creates default user profile and sets it as active profile.
		*/
		const profile = new Profile('user', 'user@user.com', 'user')
		profile.id = -1
		this.profile = profile
	},

	createDefaultAdmin: function() {
		/*
			Creates default admin profile and sets it as active profile.
		*/
		const profile = new Profile('admin', 'admin@admin.com', 'admin', true)
		profile.id = -2
		this.profile = profile
	},

	createProfileSet: function(username, email, password, admin=false) {
		/*
			Creates a profile and sets it as active profile.
		*/
		const profile = new Profile(username, email, password, admin)
		this.profile = profile
	},

	createProfilePush: function(username, email, password, admin=false) {
		/*
			Creates a profile and pushes it to profiles.
		*/
		const profile = new Profile(username, email, password, admin)
		if (this.profiles == null) {
			this.profiles = []
		}
		profile.id += this.profiles.length
		this.profiles.push(profile)
	},

	createProfileSetPush: function(username, email, password, admin=false) {
		/*
			Creates a profile, sets it as active profile, and pushes it to profiles.
		*/
		const profile = new Profile(username, email, password, admin)
		this.profile = profile
		if (this.profiles == null) {
			this.profiles = []
		}
		profile.id += this.profiles.length
		this.profiles.push(profile)
	},

	changeProfileUsernameSet: function(username) {
		/*
			Changes active profile username to username.
		*/
		if (this.profile != null) {
			this.profile.username = username
		}
	},

	changeProfileUsernamePush: function(username, id) {
		/*
			Changes profiles[id] username to username.
		*/
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].username = username
			}
		}
	}

	changeProfileUsernameSetPush: function(username) {
		/*
			Changes active profile username to username and pushes change to profiles.
		*/
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.username = username
				this.profiles[id] = this.profile
			}
		}
	},

	changeProfileEmailSet: function(email) {
		/*
			Changes active profile email to email.
		*/
		if (this.profile != null) {
			this.profile.email = email
		}
	},

	changeProfileEmailPush: function(email, id) {
		/*
			Changes profiles[id] email to email.
		*/
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].email = email
			}
		}
	}

	changeProfileEmailSetPush: function(email) {
		/*
			Changes active profile email to email and pushes change to profiles.
		*/
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.email = email
				this.profiles[id] = this.profile
			}
		}
	},

	changeProfileEmailSet: function(email) {
		/*
			Changes active profile email to email.
		*/
		if (this.profile != null) {
			this.profile.email = email
		}
	},

	changeProfileEmailPush: function(email, id) {
		/*
			Changes profiles[id] email to email.
		*/
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].email = email
			}
		}
	}

	changeProfileEmailSetPush: function(email) {
		/*
			Changes active profile email to email and pushes change to profiles.
		*/
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.email = email
				this.profiles[id] = this.profile
			}
		}
	},

	changeProfilePasswordSet: function(password) {
		/*
			Changes active profile password to password.
		*/
		if (this.profile != null) {
			this.profile.password = password
		}
	},

	changeProfilePasswordPush: function(password, id) {
		/*
			Changes profiles[id] password to password.
		*/
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].password = password
			}
		}
	}

	changeProfilePasswordSetPush: function(password) {
		/*
			Changes active profile password to password and pushes change to profiles.
		*/
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.password = password
				this.profiles[id] = this.profile
			}
		}
	},

	logout: function() {
		/*
			Sets active profile to null.
		*/
		this.profile = null
	}
}