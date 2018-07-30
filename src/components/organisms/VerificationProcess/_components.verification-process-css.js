import {html} from '@polymer/lit-element';
export default html`<style>.buv-o-link{color:#031532}.buv-o-small-text{font-size:12px}.buv-o-large-text{font-size:15px}.buv-c-verification-process{position:relative;display:table}.buv-c-verification-progress-bar{padding-top:0;position:absolute;left:0;top:0;background-color:#2ab27b;width:14px;border-radius:7px;margin:2px 0;box-sizing:content-box;-webkit-transition:height .4s ease-in-out, padding-top .4s ease-in;-moz-transition:height .4s ease-in-out, padding-top .4s ease-in;-o-transition:height .4s ease-in-out, padding-top .4s ease-in;transition:height .4s ease-in-out, padding-top .4s ease-in;min-height:100%;display:table-cell}.buv-c-verification-progress-bar.has-errored{background-color:#d0021b}.buv-c-verification-progress-bar.no-transition{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.buv-c-verification-process__step-list{padding-left:33px;display:table-cell}.buv-c-verification-step{position:relative;margin:15px 0 5px;font-weight:600}.buv-c-verification-step.is-first{margin-top:0}.buv-c-verification-substep{margin:0 0 0 15px;font-weight:400;color:rgba(3,21,50,0.7);padding:5px 0}.buv-c-verification-step::before{content:'';position:absolute;left:-38px;top:-4px;width:24px;height:24px;background-color:#fff;border-radius:50%;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out;z-index:2;box-sizing:content-box;box-shadow:0 2px 4px 0 rgba(22,40,55,0.21)}.buv-c-verification-substep::before{left:-43px;top:11px;width:4px;height:4px;background-color:rgba(255,255,255,0.8)}.buv-c-verification-step::after{position:absolute;z-index:3}.buv-c-verification-step.is-success::after{content:'';border:solid #2ab27b;border-width:0 2px 2px 0;left:-29px;width:5px;height:11px;transform:rotate(45deg)}.buv-c-verification-step.is-failure::after{content:'\\274C';left:-31px;top:-1px;font-size:11px;color:#d0021b}.buv-c-verification-step.is-final{font-size:21px;color:#2ab27b;font-weight:bold;line-height:19px}.buv-c-verification-step.is-final::before{content:'';background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgMjAgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iVmVyaWZpY2F0aW9uIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1NC4wMDAwMDAsIC00NzQuMDAwMDAwKSIgZmlsbD0iIzJBQjI3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ4LjAwMDAwMCwgNDY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LDUgTDYsOS4xODE4MTgxOCBMNiwxNS40NTQ1NDU1IEM2LDIxLjI1NjgxODIgMTAuMjY2NjY2NywyNi42ODI3MjczIDE2LDI4IEMyMS43MzMzMzMzLDI2LjY4MjcyNzMgMjYsMjEuMjU2ODE4MiAyNiwxNS40NTQ1NDU1IEwyNiw5LjE4MTgxODE4IEwxNiw1IEwxNiw1IFogTTksMTcuNzUzNzE1NSBMMTAuNTI3NSwxNi4yNTY5MDAyIEwxMy4zMzMzMzMzLDE4Ljk5NTc1MzcgTDIwLjQ3MjUsMTIgTDIyLDEzLjUwNzQzMSBMMTMuMzMzMzMzMywyMiBMOSwxNy43NTM3MTU1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");background-repeat:no-repeat;background-position:center;height:38px;width:38px;top:-12px;left:-45px}.buv-c-verification-step.is-final::after,.buv-c-verification-substep::after{display:none}.buv-u-excluded-from-flow{position:absolute}.buv-c-verification-step__toggle-link{display:block}:host .step .loading-txt,:host .step.starting>a,:host .step.starting .sub-steps{display:none}:host .step.starting .loading-txt{display:block}:host .step.opened .sub-steps{height:auto}:host .step.opened .step-arrow{transform:rotate(180deg)}:host .step-arrow{width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid #768087;display:inline-block;vertical-align:2px;margin:0 6px;-webkit-transition:-webkit-transform .3s ease-in;-o-transition:transform .3s ease-in;transition:transform .3s ease-in}
</style>`;
