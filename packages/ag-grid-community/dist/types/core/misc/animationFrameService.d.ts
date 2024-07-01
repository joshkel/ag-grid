import type { NamedBean } from '../context/bean';
import { BeanStub } from '../context/beanStub';
import type { BeanCollection } from '../context/context';
export declare class AnimationFrameService extends BeanStub implements NamedBean {
    beanName: "animationFrameService";
    private ctrlsService;
    private paginationService?;
    wireBeans(beans: BeanCollection): void;
    private createTasksP1;
    private createTasksP2;
    private destroyTasks;
    private ticking;
    private useAnimationFrame;
    private scrollGoingDown;
    private lastPage;
    private lastScrollTop;
    private taskCount;
    private cancelledTasks;
    setScrollTop(scrollTop: number): void;
    postConstruct(): void;
    isOn(): boolean;
    private verifyAnimationFrameOn;
    createTask(task: () => void, index: number, list: 'createTasksP1' | 'createTasksP2'): void;
    cancelTask(task: () => void): void;
    private addTaskToList;
    private sortTaskList;
    addDestroyTask(task: () => void): void;
    private executeFrame;
    private stopTicking;
    flushAllFrames(): void;
    schedule(): void;
    private requestFrame;
    requestAnimationFrame(callback: any): void;
    isQueueEmpty(): boolean;
    debounce(func: () => void): () => void;
}
