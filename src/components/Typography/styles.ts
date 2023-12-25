import {StyleSheet} from "react-native";
import Colors from "../../utils/colors";
import DimensionsConfig from "../../utils/dimens";

export const styles = StyleSheet.create({
  heading: {
    fontSize: DimensionsConfig.fontSize.large,
    fontWeight: 'bold',
    marginBottom: DimensionsConfig.margin.small,
    color: Colors.primary
  },
  subheading: {
    fontSize: DimensionsConfig.fontSize.medium,
    fontWeight: 'bold',
    marginBottom: DimensionsConfig.margin.xSmall,
  },
  body: {
    fontSize: DimensionsConfig.fontSize.small,
    marginBottom: DimensionsConfig.margin.xxSmall,
  },
});
