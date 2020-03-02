const storage = new Storage()

let result = (function createProfileSetPushTest() {
	sessionStorage.clear()
	storage.createProfileSetPush('a', 'b', 'c')
	return storage.profile.id
})()
console.assert(result == 0, {result: result, error: 'createProfileSetPushTest expected 0'})

result = (function createProgramPushTest() {
	sessionStorage.clear()
	storage.createProgramPush('pa', 'pb')
	return storage.programs[0].id
})()
console.assert(result == 0, {result: result, error: 'createProgramPushTest expected 0'})

result = (function programToProfileTest1() {
	sessionStorage.clear()
	storage.createProgramPush('pa', 'pb')
	storage.createProfileSetPush('a', 'b', 'c')
	storage.programToProfile(0, 0)
	return storage.profiles[0].programs[0].id
})()
console.assert(result == 0, {result: result, error: 'programToProfileTest1 expected 0'})

result = (function programToProfileTest2() {
	sessionStorage.clear()
	storage.createProgramPush('pa', 'pb')
	storage.createProfileSetPush('a', 'b', 'c')
	storage.programToProfile()
	return storage.profile.programs[0].id
})()
console.assert(result == 0, {result: result, error: 'programToProfileTest2 expected 0'})

result = (function checkProfileForProgramTest1() {
	sessionStorage.clear()
	storage.createProgramPush('pa', 'pb')
	storage.createProfileSetPush('a', 'b', 'c')
	return storage.checkProfileForProgram(0)
})()
console.assert(!result, {result: result, error: 'createProfileForProgramTest1 expected false'})

result = (function checkProfileForProgramTest2() {
	sessionStorage.clear()
	storage.createProgramPush('pa', 'pb')
	storage.createProfileSetPush('a', 'b', 'c')
	storage.programToProfile(0, 0)
	return storage.checkProfileForProgram(0, 0)
})()
console.assert(result, {result: result, error: 'createProfileForProgramTest2 expected true'})

result = (function checkProfileForProgramTest3() {
	sessionStorage.clear()
	storage.createProgramPush('pa', 'pb')
	storage.createProfileSetPush('a', 'b', 'c')
	storage.programToProfile()
	return storage.checkProfileForProgram(0)
})()
console.assert(result, {result: result, error: 'createProfileForProgramTest3 expected true'})