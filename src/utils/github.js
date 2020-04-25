import Vue from "vue";
import { Base64 } from "js-base64";
import defaultSettings from "../setting";
const { token, apiUrl, repo, user } = defaultSettings;

export function getDataFile(fileName) {
  return Vue.http.get(
    apiUrl + "/repos/" + user + "/" + repo + "/contents/" + fileName,
    {
      headers: {
        Authorization: "token " + token
      }
    }
  );
}

export function saveDataFile(fileName, input, sha) {
  const params = {
    message: "测试提交",
    content: Base64.encode(input),
    sha: sha
  };
  console.log(params);
  return Vue.http.put(
    apiUrl + "/repos/" + user + "/" + repo + "/contents/" + fileName,
    params,
    {
      headers: {
        Authorization: "token " + token
      }
    }
  );
}
