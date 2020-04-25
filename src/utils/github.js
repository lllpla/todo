import Vue from "vue";
import { Base64 } from "js-base64";
import { date } from "quasar";

export function getDataFile(fileName, settings) {
  return Vue.http.get(
    settings.apiUrl +
      "/repos/" +
      settings.user +
      "/" +
      settings.repo +
      "/contents/" +
      fileName,
    {
      headers: {
        Authorization: "token " + settings.token
      }
    }
  );
}

export function saveDataFile(fileName, input, sha, settings) {
  const params = {
    message: "数据更新--" + date.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss"),
    content: Base64.encode(input),
    sha: sha
  };
  return Vue.http.put(
    settings.apiUrl +
      "/repos/" +
      settings.user +
      "/" +
      settings.repo +
      "/contents/" +
      fileName,
    params,
    {
      headers: {
        Authorization: "token " + settings.token
      }
    }
  );
}
