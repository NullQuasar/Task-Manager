const Ctrls = { };

Ctrls.renderIndex = (req, res) => {
    console.log('Initialized main route (/)');
    // res.send('Hello user!');
    res.render('index');
};

Ctrls.renderAbout = (req, res) => {
    console.log('About route accessed');
    // res.send('Hello user!');
    res.render('about');
};

module.exports = Ctrls;
