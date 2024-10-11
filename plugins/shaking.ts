import { Plugin } from 'rollup';
import {Loader,Options} from '@rollkits/plugin-shaking-css';

interface CustomOptions {
    name: string
    packages?: string[]
}

export function MyPlugin(): Plugin {
    const options: Options<CustomOptions> = {
        preset: 'recommended',
        include: [/\.css$/i],
        exclude: [/global.css/i],
        packages: ['antd-mobile'],
        debug: true,
        customOptions: {
            name: 'build-plugin:override'
        }
    }

    const loader = new Loader<CustomOptions>(options)

    return {
        name: 'build-plugin:override',

        options(options) {
            console.log(options);
            if (Array.isArray(options.plugins)) {
                options.plugins.push(loader)
            }
            return options
        },
    }
}