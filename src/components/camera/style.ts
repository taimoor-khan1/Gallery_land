import { SIZES } from '../../constants';

export const Container = {
  flex: 1,
  position: "relative"

}  ;

export const Buttons = {
  position: "absolute",
  flexDirection: "row",
  justifyContent: "space-between",

  right: 0,
  left: 0,
  bottom: 0,
  padding: SIZES.twentyFive,
};

export const Button = {
  width: SIZES.fifty*1.15,
  height: SIZES.fifty*1.15,
  borderRadius: SIZES.twenty*1.35,
  backgroundColor:  "white",

  alignItems: 'center',
  justifyContent: 'center',
};
