import prodConfig from "./webpack.prod"; // 引入打包配置
import { merge } from "webpack-merge";
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'; // 引入webpack打包速度分析插件
import { BundleAnalyzerPlugin }from "webpack-bundle-analyzer";
import { Configuration } from "webpack";

const smp = new SpeedMeasurePlugin(); // 实例化分析插件

// 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
const analyConfig: Configuration = merge(prodConfig, {
    plugins: [
      new BundleAnalyzerPlugin() // 配置分析打包结果插件
    ]
})

export default analyConfig;
