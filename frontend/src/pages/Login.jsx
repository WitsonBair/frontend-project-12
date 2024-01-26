import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">Логин</label>
      <input
        id="login"
        name="login"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <label htmlFor="password">Пароль</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
