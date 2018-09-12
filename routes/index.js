
module.exports = (app, passport) => {
    app.use('/', require('./route')(passport));
    app.get('/', (req, res) => res.status(200).json({ status: "OK" }));
};