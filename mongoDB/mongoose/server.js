const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeappdatabase');
const Schema = mongoose.Schema;

//new user Schema
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});

//Mongoose schema method
userSchema.methods.manify = function() {
    this.name = this.name + '-boy';

    return this.name;
};

//pre-save method
userSchema.pre('save', function(next) {
    //pobranie aktualnego czasu
    const currentDate = new Date();

    //zmiana pola na aktualny czas
    this.updated_at = currentDate;

    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

//model based on userSchema
const User = mongoose.model('User', userSchema);

//instancje klasy User
const kenny = new User({
    name: 'Kenny',
    username: 'Kenny_the_boy',
    password: 'password'
});

kenny.manify(function(err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});

kenny.save(function(err) {
    if (err) throw err;

    console.log('Uzytkownik ' + kenny.name +  ' zapisany pomyslnie');
});

const benny = new User({
    name: 'Benny',
    username: 'Benny_the_boy',
    password: 'password'
});

benny.manify(function(err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});

benny.save(function(err) {
    if (err) throw err;

    console.log('Uzytkownik ' + benny.name +  ' zapisany pomyslnie');
});

const mark = new User({
    name: 'Mark',
    username: 'Mark_the_boy',
    password: 'password'
});

mark.manify(function(err, name) {
    if (err) throw err;
    console.log('Twoje nowe imię to: ' + name);
});

mark.save(function(err) {
    if (err) throw err;

    console.log('Uzytkownik ' + mark.name +  ' zapisany pomyslnie');
});

//find all users
User.find({}, function(err, res) {
    if (err) throw err;
    console.log('Actual database records are ' + res);
});

//find specific record
User.find({ username: 'Kenny_the_boy' }, function(err, res) {
    if (err) throw err;
    console.log('Record you are looking for is ' + res);
});

//update user password
User.find({ username: 'Kenny_the_boy' }, function(err, user) {
    if (err) throw err;
    console.log('Old password is ' + user.password);
    user.password = 'newPassword';
    console.log('New password is ' + user.password);

    user.save(function(err) {
        if (err) throw err;

        console.log('Uzytkownik ' + user.name + ' zostal pomyslnie zaktualizowany');
    })
});

//update username
User.findOneAndUpdate({ username: 'Benny_the_boy' }, { username: 'Benny_the_man' }, function(err, user) {
    if (err) throw err;

    console.log('Nazwa uzytkownika po aktualizacji to ' + user.username);
});

//find specific user and delete
User.find({ username: 'Mark_the_boy' }, function(err, user) {
    if (err) throw err;

    user.remove(function(err) {
        if (err) throw err;

        console.log('User successfully deleted');
    });
});

//find specific user and delete
User.find({ username: 'Kenny_the_boy' }, function(err, user) {
    if (err) throw err;

    user.remove(function(err) {
        if (err) throw err;
        console.log('User successfully deleted');
    });
});

//find specific user and delete
User.findOneAndRemove({ username: 'Benny_the_man' }, function(err) {
    if (err) throw err;
    console.log('User deleted!');
});