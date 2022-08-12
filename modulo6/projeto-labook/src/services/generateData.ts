import moment from "moment";

export const generateData = (): string =>
  moment().format("YYYY-MM-DD HH:mm:ss");