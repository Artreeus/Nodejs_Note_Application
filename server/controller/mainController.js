//  get Home page

exports.homepage = async (req, res) => {
  const locals = {
    title: "Nodejs Notes",
    description: "Nodejs Notes App",
  };

  res.render("index", locals);
};


//  get About page

exports.about = async (req, res) => {
  const locals = {
    title: "About - Nodejs Notes",
    description: "Nodejs Notes App",
  };

  res.render("about", locals);
};
