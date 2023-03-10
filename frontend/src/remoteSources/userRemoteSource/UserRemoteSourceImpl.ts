import { UserRemoteSource } from "./UserRemoteSource";
import { LoginBody } from "models/src/bodyModels/LoginBody";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import { Result } from "models/src/Result";
import { User } from "models/src/User";
import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "../common/Consts";
import { convertAxiosFailToFailResult } from "../common/Utils";

export class UserRemoteSourceImpl extends UserRemoteSource {
  getUser(userId?: string): Promise<Result<User>> {
    const options: AxiosRequestConfig = {
      method: "GET",
      params: {
        userId: userId,
      },
      withCredentials: true,
    };

    return axios
      .get<Result<User>>(`${API_BASE_URL}/api/v1/user/${userId ?? ""}`, options)
      .then((result) => {
        return result.data;
      })
      .catch((reason) => {
        return convertAxiosFailToFailResult(reason);
      });
  }

  async login(loginBody: LoginBody): Promise<Result<User>> {
    const options: AxiosRequestConfig = {
      method: "POST",
      withCredentials: true,
    };

    return axios
      .post<Result<User>>(
        `${API_BASE_URL}/api/v1/user/login`,
        loginBody,
        options
      )
      .then((result) => {
        return result.data;
      })
      .catch((reason) => {
        return convertAxiosFailToFailResult(reason);
      });
  }

  signUp(signUpBody: SignUpBody): Promise<Result<User>> {
    const options: AxiosRequestConfig = {
      method: "POST",
    };

    return axios
      .post<Result<User>>(
        `${API_BASE_URL}/api/v1/user/signUp`,
        signUpBody,
        options
      )
      .then((result) => {
        return result.data;
      })
      .catch((reason) => {
        return convertAxiosFailToFailResult(reason);
      });
  }

  logout(): Promise<Result<null>> {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      withCredentials: true,
    };

    return axios
      .delete<Result<null>>(`${API_BASE_URL}/api/v1/user/logout`, options)
      .then((result) => {
        return result.data;
      })
      .catch((reason) => {
        return convertAxiosFailToFailResult(reason);
      });
  }
}
