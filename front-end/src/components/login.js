import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userClearError, userLogin } from "../store/actions/user-action";
import { useForm } from "react-hook-form";
import { useRedirectLogged } from "../hooks/redirect-hook";
import { loginValidator } from "../validators/login-val";
import styles from "./components.module.css";

const Login = () => {
  // Si déjà loggé
  useRedirectLogged();

  const dispatch = useDispatch();
  // Lors du retour sur la page
  useEffect(() => {
    dispatch(userClearError);
  });

  // options formulaire et usage
  const options = {
    defaultValues: {
      pseudo: "",
      password: "",
    },
    resolver: yupResolver(loginValidator),
    reValidateMode: "onSubmit",
  };
  const { register, handleSubmit } = useForm(options);

  // Envoi des données dans le store
  const onSubmit = ({ pseudo, password }) => {
    dispatch(userLogin({ pseudo, password }));
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Pseudo </label>
          <input {...register("pseudo")} />
        </div>
        <div>
          <label>Password </label>
          <input {...register("password")} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

// to : index.js (routes)
export default Login;
