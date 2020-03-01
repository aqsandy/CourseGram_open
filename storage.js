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
	this.requestDelete = false
	this.programs = []
}

function Program(name, code) {
	this.id = 0
	this.name = name
	this.code = code
	this.courses = []
}

function Course(name, code) {
	this.id = 0
	this.name = name
	this.code = code
	this.prerequisites = []
	this.corequisites = []
	this.exclusion = []
}

function Storage() {
	// Code below requires server calls.
	this.profile = JSON.parse(sessionStorage.getItem('profile'))
	this.profiles = JSON.parse(sessionStorage.getItem('profiles'))
	this.program = JSON.parse(sessionStorage.getItem('program'))
	this.programs = JSON.parse(sessionStorage.getItem('programs'))
	this.courses = JSON.parse(sessionStorage.getItem('courses'))
}


Storage.prototype = {
	fromStorage: function() {
		/*
			Loads profile data from sessionStorage.
			Code below requires server calls.
		*/
		this.profile = JSON.parse(sessionStorage.getItem('profile'))
		this.profiles = JSON.parse(sessionStorage.getItem('profiles'))
		this.program = JSON.parse(sessionStorage.getItem('program'))
		this.programs = JSON.parse(sessionStorage.getItem('programs'))
		this.courses = JSON.parse(sessionStorage.getItem('courses'))
	},

	toStorage: function() {
		/*
			Saves profile data to sessionStorage.
			Code below requires server calls.
		*/
		sessionStorage.setItem('profile', JSON.stringify(this.profile))
		sessionStorage.setItem('profiles', JSON.stringify(this.profiles))
		sessionStorage.setItem('program', JSON.stringify(this.program))
		sessionStorage.setItem('programs', JSON.stringify(this.programs))
		sessionStorage.setItem('courses', JSON.stringify(this.courses))
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
	},

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
	},

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
	},

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
	},

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

	checkEmail: function(email) {
		/*
			Sets active profile and returns true if email matches profile in profiles.
		*/
		this.fromStorage()
		if (this.profiles != null) {
			for (let i = 0; i < this.profiles.length; i++) {
				if (this.profiles[i].email == email) {
					this.profile = this.profiles[i]
					this.toStorage()
					return true
				}
			}
		}
		return false
	},

	checkAdmin: function(id=null) {
		/*
			Returns true if active profile or profiles[id] is admin profile.
		*/
		this.fromStorage()
		if (id != null && this.profiles != null) {
			if (this.profiles[id].admin) {
				return true
			}
		} else if (this.profile != null) {
			if (this.profile.admin) {
				return true
			}
		}
		return false
	},

	getUsername: function(id=null) {
		/*
			Returns username of active profile or profiles[id].
		*/
		this.fromStorage()
		if (id != null && this.profiles != null) {
			return this.profiles[id].username
		} else if (this.profile != null) {
			return this.profile.username
		}
		return null
	},

	login: function(username, password) {
		/*
			Sets active profile and returns true if username and password matches profile in profiles.
		*/
		this.fromStorage()
		if (this.profiles != null) {
			for (let i = 0; i < this.profiles.length; i++) {
				if (this.profiles[i].username == username && this.profiles[i].password == password) {
					this.profile = this.profiles[i]
					this.toStorage()
					return true
				}
			}
		}
		return false
	},

	logout: function() {
		/*
			Sets active profile to null.
		*/
		this.fromStorage()
		this.profile = null
		this.toStorage()
	},

	requestDelete: function() {
		/*
			Sets active profile requestDelete to true.
		*/
		this.fromStorage()
		if (this.profile != null) {
			this.profile.requestDelete = true
		}
		this.toStorage()
	},

	requestDeleteCancel: function() {
		/*
			Sets active profile requestDelete to false.
		*/
		this.fromStorage()
		if (this.profile != null) {
			this.profile.requestDelete = false
		}
		this.toStorage()
	},

	createProgramPush: function(name, code) {
		/*
			Creates a program and pushes it to programs.
		*/
		this.fromStorage()
		const program = new Program(name, code)
		if (this.programs == null) {
			this.programs = []
		}
		program.id += this.programs.length
		this.programs.push(program)
		this.toStorage()
	},

	setProgram: function(id) {
		/*
			Sets programs[id] to active program.
		*/
		this.fromStorage()
		if (this.programs != null) {
			if (id < this.programs.length) {
				this.program = this.programs[id]
			}
		}
		this.toStorage()
	},

	getProgramName: function(id=null) {
		/*
			Get active program name or programs[id] name.
		*/
		this.fromStorage()
		if (this.programs != null) {
			if (id < this.programs.length) {
				return this.programs[id].name
			}
		} else if (this.program != null) {
			return this.program.name
		}
		return null
	},

	getProgramCode: function(id=null) {
		/*
			Get active program code programs[id] code.
		*/
		this.fromStorage()
		if (this.programs != null) {
			if (id < this.programs.length) {
				return this.programs[id].code
			}
		} else if (this.program != null) {
			return this.program.name
		}
		return null
	},

	createCoursePush: function(name, code) {
		/*
			Creates a course and pushes it to courses.
		*/
		this.fromStorage()
		const course = new Course(name, code)
		if (this.courses == null) {
			this.courses = []
		}
		course.id += this.courses.length
		this.courses.push(course)
		this.toStorage()
	},

	courseToProgram: function(courseId, programId) {
		/*
			Pushes courses[courseId] to courses of programs[programId].
		*/
		this.fromStorage()
		if (this.courses != null && this.programs != null) {
			if (courseId < this.courses.length && programId < this.programs.length) {
				this.programs[programId].push(this.courses[courseId])
			}
		}
		this.toStorage()
	},

	prerequisiteToCourse: function(prerequisiteId, courseId) {
		/*
			Pushes courses[prerequisiteId] to prerequisites of courses[courseId].
		*/
		this.fromStorage()
		if (this.courses != null) {
			if (prerequisiteId < this.courses.length && courseId < this.courses.length) {
				this.courses[courseId].push(this.courses[prerequisiteId])
			}
		}
		this.toStorage()
	},

	corequisiteToCourse: function(corequisiteId, courseId) {
		/*
			Pushes courses[corequisiteId] to corequisites of courses[courseId].
		*/
		this.fromStorage()
		if (this.courses != null) {
			if (corequisiteId < this.courses.length && courseId < this.courses.length) {
				this.courses[courseId].push(this.courses[corequisiteId])
			}
		}
		this.toStorage()
	},

	exclusionToCourse: function(exclusionId, courseId) {
		/*
			Pushes courses[exclusionId] to exclusions of courses[courseId].
		*/
		this.fromStorage()
		if (this.courses != null) {
			if (exclusionId < this.courses.length && courseId < this.courses.length) {
				this.courses[courseId].push(this.courses[exclusionId])
			}
		}
		this.toStorage()
	}
}