## Version 0.2.17(2023-03-19)

- Dark mode:
  - Optimize `editorBracketHighlight` color.
  - Add `tab.activeBorderTop` and change `tab.inactiveBackground` in order to make current tab more distinguishable.

-Light mode:
  - Improve the readability of search results.
  - Optimize `editorBracketHighlight` color.

## Version 0.2.16(2021-07-20)

- Support `editorIndentGuide.activeBackground`

## Version 0.2.15(2021-06-16)

- Change `list.focusHighlightForeground` in light mode (#5).
- Update `statusBarItem.prominentBadgeColor`, support workspace trust badge.
- Fix `scrollbar.shadow` in light mode 

## Version 0.2.14(2020-03-22)

- Enable semantic highlighting by default.

WANT TO DISABLE ?

Change this configuration to disable semantic highlighting for all themes:

```
"editor.semanticHighlighting.enabled": false
```

Or change this configuration to disable only for chinolor:

```
"editor.tokenColorCustomizations": {
  "[Chinolor]": {
    "semanticHighlighting": false
  },
  "[Chinolor Light]": {
    "semanticHighlighting": false
  }
}
```

## Version 0.2.13(2020-03-11)

- Support semantic highlighting.

## Version 0.2.12(2019-11-09)

- Change `activityBar.activeBorder` color.

## Version 0.2.11(2019-10-10)

- Change `minimap.selectionHighlight` color.

## Version 0.2.10(2019-03-20)

- Change the color of terminal.ansiBrightBlack(#2b312c => #8a988e), which ever made arguments in powershell invisible.

## Version 0.2.8(2018-09-11)

- Ignore images when packaging extension.

## Version 0.2.7(2018-09-07)

- Add support to integrated terminal.

## Version 0.2.6(2018-09-05)

- Fix an error in scheme-light image.
- Add color palette images.

## Version 0.2.5(2018-06-29)

- Change the color of css property name: dark theme(#e4dfd7 => #8abcd1), light theme(#2b312c => #1781b5)
- Change the color of css id: dark theme(#8abcd1 => #5dbe8a), light theme(#1781b5 => #207f4c)
- Remove '明灰(#8a988e)' of dark theme
- Update scheme images

## Version 0.2.4(2018-05-31)

- Update some colors of markdown.
- Update scheme-light image.

## Version 0.2.3(2018-05-17)

- Update color of css unit

## Version 0.2.0(2018-05-15)

- Add light theme

## Version 0.1.0

- Initial release
