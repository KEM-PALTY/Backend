const passport=require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.serializeUser(function(user, done) {
    //console.log("serial ",user," done",done);
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    //User.findById(id, function(err, user) {
       // console.log("deserial ",user," done",done);
      done(null, user);
    //});
  });
passport.use(new GoogleStrategy({
    clientID: "235899062183-p4dmqc9gjdsumsrvrmf3irgc2pjvgj2c.apps.googleusercontent.com",
    clientSecret: "BeobRH1abOTD139SWT4VRJh_",
    callbackURL: "https://kem-palty-admin-panel.herokuapp.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //console.log(profile);
    return cb(null, profile);
    //});
  }
));