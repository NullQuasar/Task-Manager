const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    passw: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
});


// (schema).methods.(method) = (func) # Define some method for a schema, from mongoose, and apply the method to some fields
// Bcrypt encrypt passw
UserSchema.methods.passwEncrypt = async (pass) => {
    // Encrypt password and return hash

    const Salt = await bcrypt.genSalt(9);
    return await bcrypt.hash(pass, Salt);
};

UserSchema.methods.passwAuth = async function(pass) {
    // Compare passwords (validate user)

    return await bcrypt.compare(pass, this.passw); // Return: bool
};

module.exports = model('TimeManager', UserSchema);
