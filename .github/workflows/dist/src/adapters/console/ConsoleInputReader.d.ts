/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Interface as ReadlineInterface, ReadLineOptions } from 'readline';
export declare class ConsoleInputReader {
    protected interactive: ReadlineInterface;
    private _opts;
    /**
     * Creates an object that allows for user interaction.
     * @param options {@link https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions readline.createInterface options}
     * @param opts.input {@link NodeJS.ReadableStream} an input stream. defaults to process.stdin.
     * @param opts.output {@link NodeJS.WritableStream} an output stream. defaults to process.stdout.
     * @oaram opts.
     */
    constructor(options?: Partial<ReadLineOptions>);
    prompt(question: any, inputValidator?: Function): Promise<Object>;
    /** Print a message to the output without expecting an input action. */
    print(val: undefined | null | string | Buffer, eol?: string): void;
    close(): void;
    private ask;
}
