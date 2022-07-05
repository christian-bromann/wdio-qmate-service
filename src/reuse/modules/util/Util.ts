import browser, {Browser} from './browser';
import console, {Console} from './console';
import data, { Data } from './data';
import file, { File } from './file';
import formatter, { Formatter } from './formatter';
import funct, { Funct } from './funct';
import system, {System} from './system';

interface DataHooksExtended extends Data {
    decrypt: (input: string) => string;
    privateKeyFound: boolean;
}

export class Util {
    browser: Browser = browser
    console: Console = console
    data: DataHooksExtended = data as DataHooksExtended
    file: File = file
    formatter: Formatter = formatter
    funct: Funct = funct
    system: System = system
}

export default new Util()