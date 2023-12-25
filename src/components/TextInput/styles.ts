import { StyleSheet } from "react-native";
import Colors, { Text } from "../../utils/colors";
import DimensionsConfig, { buttonLargeWidth } from "../../utils/dimens";

const styles = StyleSheet.create({
  input: {
    height: DimensionsConfig.inputTextHeight,
    minWidth: buttonLargeWidth,
    borderColor: Colors.primary,
    borderWidth: DimensionsConfig.borderWidth,
    paddingVertical: DimensionsConfig.padding.medium,
    borderRadius: DimensionsConfig.inputTextBorderRadius,
    marginBottom: DimensionsConfig.margin.medium,
    marginVertical: DimensionsConfig.margin.medium,
    fontSize: DimensionsConfig.fontSize.medium,
    color: Text.textColor,
    paddingHorizontal: DimensionsConfig.padding.medium
  },
});

export default styles;
