export const useCopyClickedHandler = (target) => {
    const copyButton = target;
    const demoParent = target.closest('.demo-box');
    const preBlock = demoParent.querySelector('pre');

    const range = document.createRange();
    range.selectNode(preBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');
    copyButton.classList.add('active');

    setTimeout(() => {
        window.getSelection().removeAllRanges();
        copyButton.classList.remove('active');
    }, 2000);
};