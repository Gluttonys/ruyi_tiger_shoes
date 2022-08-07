import dayjs from "dayjs";

/**
 * @desc 返回当前格式化时间
 */
const getNow = (): string => dayjs().format('YYYY MM-DD HH:mm:ss')


export {
  getNow
}
