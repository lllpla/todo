import Vue from "vue";
import { Base64 } from "js-base64";
import { date } from "quasar";

const apiUrl = "https://gitee.com/api/v5";
export function getDataFileGitee(fileName, settings) {
  const reqUrl =
    apiUrl +
    "/repos/" +
    settings.user +
    "/" +
    settings.repo +
    "/contents/" +
    fileName +
    "?access_token=" +
    settings.token;
  return Vue.http.get(reqUrl);
}

export function saveDataFileGitee(fileName, input, sha, settings) {
  const params = {
    message: "数据更新--" + date.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss"),
    content: Base64.encode(input),
    sha: sha,
    access_token: settings.token
  };
  const reqUrl =
    apiUrl +
    "/repos/" +
    settings.user +
    "/" +
    settings.repo +
    "/contents/" +
    fileName;
  return Vue.http.put(reqUrl, params);
}

export function newFileGitee(fileName, input, settings) {
  const params = {
    message: "新建文件--" + date.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss"),
    content: Base64.encode(input),
    access_token: settings.token
  };
  const reqUrl =
    apiUrl +
    "/repos/" +
    settings.user +
    "/" +
    settings.repo +
    "/contents/" +
    fileName;
  return Vue.http.post(reqUrl, params);
}
