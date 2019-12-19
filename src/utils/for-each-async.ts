import { LoopStateArgs } from './loop-state-args';

export async function forEachAsync<T>(array: T[], callback: (current: T, index: number, array: T[], loopStateArgs: LoopStateArgs) => Promise<void>) {
    const loopStateArgs: LoopStateArgs = new LoopStateArgs();

    for(let index = 0; index < array.length; ++index) {
        await callback(array[index], index, array, loopStateArgs);

        if(!loopStateArgs.continueExecution) {
            break;
        }
    }
}
