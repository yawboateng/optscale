import { ML_MODELS_PARAMETER_EDIT } from "urls";
import BaseRoute from "./baseRoute";

class EditMlModelParameterRoute extends BaseRoute {
  page = "EditMlModelParameter";

  link = ML_MODELS_PARAMETER_EDIT;
}

export default new EditMlModelParameterRoute();
