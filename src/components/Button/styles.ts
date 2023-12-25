import {StyleSheet} from "react-native";
import {Button} from "../../utils/colors";
import DimensionsConfig from "../../utils/dimens";


const styles = StyleSheet.create({
  button: {
    backgroundColor: Button.buttonColor,
    paddingVertical: DimensionsConfig.padding.medium,
    paddingHorizontal: DimensionsConfig.padding.large,
    borderRadius: DimensionsConfig.buttonBorderRadius,
    alignItems: 'center',
  },
  buttonText: {
    color: Button.buttonTextColor,
    fontSize: DimensionsConfig.fontSize.medium,
    fontWeight: 'bold',
  },
});

export default styles;
