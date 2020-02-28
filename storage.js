/* JS Library for Accessing and Modifying Profile Data Locally and on Server */

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
	// Code below requires server calls.
	this.profile = JSON.parse(sessionStorage.getItem('profile'))
	this.profiles = JSON.parse(sessionStorage.getItem('profiles'))
}

Storage.prototype = {
	fromStorage: function() {
		/*
			Loads profile data from sessionStorage.
			Code below requires server calls.
		*/
		this.profile = JSON.parse(sessionStorage.getItem('profile'))
		this.profiles = JSON.parse(sessionStorage.getItem('profiles'))
	},

	toStorage: function() {
		/*
			Saves profile data to sessionStorage.
			Code below requires server calls.
		*/
		sessionStorage.setItem('profile', JSON.stringify(this.profile))
		sessionStorage.setItem('profiles', JSON.stringify(this.profiles))
	},

	createDefaultUser: function() {
		/*
			Creates default user profile and sets it as active profile.
		*/
		this.fromStorage()
		const profile = new Profile('user', 'user@user.com', 'user')
		profile.id = -1
		this.profile = profile
		this.toStorage()
	},

	createDefaultAdmin: function() {
		/*
			Creates default admin profile and sets it as active profile.
		*/
		this.fromStorage()
		const profile = new Profile('admin', 'admin@admin.com', 'admin', true)
		profile.id = -2
		this.profile = profile
		this.toStorage()
	},

	createProfileSet: function(username, email, password, admin=false) {
		/*
			Creates a profile and sets it as active profile.
		*/
		this.fromStorage()
		const profile = new Profile(username, email, password, admin)
		this.profile = profile
		this.toStorage()
	},

	createProfilePush: function(username, email, password, admin=false) {
		/*
			Creates a profile and pushes it to profiles.
		*/
		this.fromStorage()
		const profile = new Profile(username, email, password, admin)
		if (this.profiles == null) {
			this.profiles = []
		}
		profile.id += this.profiles.length
		this.profiles.push(profile)
		this.toStorage()
	},

	createProfileSetPush: function(username, email, password, admin=false) {
		/*
			Creates a profile, sets it as active profile, and pushes it to profiles.
		*/
		this.fromStorage()
		const profile = new Profile(username, email, password, admin)
		this.profile = profile
		if (this.profiles == null) {
			this.profiles = []
		}
		profile.id += this.profiles.length
		this.profiles.push(profile)
		this.toStorage()
	},

	changeProfileUsernameSet: function(username) {
		/*
			Changes active profile username to username.
		*/
		this.fromStorage()
		if (this.profile != null) {
			this.profile.username = username
			this.toStorage()
		}
	},

	changeProfileUsernamePush: function(username, id) {
		/*
			Changes profiles[id] username to username.
		*/
		this.fromStorage()
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].username = username
				this.toStorage()
			}
		}
	}

	changeProfileUsernameSetPush: function(username) {
		/*
			Changes active profile username to username and pushes change to profiles.
		*/
		this.fromStorage()
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.username = username
				this.profiles[id] = this.profile
				this.toStorage()
			}
		}
	},

	changeProfileEmailSet: function(email) {
		/*
			Changes active profile email to email.
		*/
		this.fromStorage()
		if (this.profile != null) {
			this.profile.email = email
			this.toStorage()
		}
	},

	changeProfileEmailPush: function(email, id) {
		/*
			Changes profiles[id] email to email.
		*/
		this.fromStorage()
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].email = email
				this.toStorage()
			}
		}
	}

	changeProfileEmailSetPush: function(email) {
		/*
			Changes active profile email to email and pushes change to profiles.
		*/
		this.fromStorage()
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.email = email
				this.profiles[id] = this.profile
				this.toStorage()
			}
		}
	},

	changeProfileEmailSet: function(email) {
		/*
			Changes active profile email to email.
		*/
		this.fromStorage()
		if (this.profile != null) {
			this.profile.email = email
			this.toStorage()
		}
	},

	changeProfileEmailPush: function(email, id) {
		/*
			Changes profiles[id] email to email.
		*/
		this.fromStorage()
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].email = email
				this.toStorage()
			}
		}
	}

	changeProfileEmailSetPush: function(email) {
		/*
			Changes active profile email to email and pushes change to profiles.
		*/
		this.fromStorage()
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.email = email
				this.profiles[id] = this.profile
				this.toStorage()
			}
		}
	},

	changeProfilePasswordSet: function(password) {
		/*
			Changes active profile password to password.
		*/
		this.fromStorage()
		if (this.profile != null) {
			this.profile.password = password
			this.toStorage()
		}
	},

	changeProfilePasswordPush: function(password, id) {
		/*
			Changes profiles[id] password to password.
		*/
		this.fromStorage()
		if (this.profiles != null) {
			if (id < this.profiles.length) {
				this.profiles[id].password = password
				this.toStorage()
			}
		}
	}

	changeProfilePasswordSetPush: function(password) {
		/*
			Changes active profile password to password and pushes change to profiles.
		*/
		this.fromStorage()
		if (this.profile != null && this.profiles != null) {
			if (this.profile.id < this.profiles.length) {
				this.profile.password = password
				this.profiles[id] = this.profile
				this.toStorage()
			}
		}
	},

	logout: function() {
		/*
			Sets active profile to null.
		*/
		this.fromStorage()
		this.profile = null
		this.toStorage()
	}
}