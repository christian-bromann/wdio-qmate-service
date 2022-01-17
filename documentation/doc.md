## Constants

<dl>
<dt><a href="#common">common</a></dt>
<dd><p>Global namespace for common modules.</p>
</dd>
<dt><a href="#util">util</a></dt>
<dd><p>Global namespace for util modules.</p>
</dd>
<dt><a href="#ui5">ui5</a></dt>
<dd><p>Global namespace for UI5 modules.</p>
</dd>
<dt><a href="#nonUi5">nonUi5</a></dt>
<dd><p>Global namespace for non UI5 modules.</p>
</dd>
<dt><a href="#service">service</a></dt>
<dd><p>Global namespace for service modules.</p>
</dd>
</dl>

<a name="common"></a>

## common
Global namespace for common modules.

**Kind**: global constant  

* [common](#common)
    * [.assertion](#common.assertion)
        * [.expectEqual(value1, value2)](#common.assertion.expectEqual)
        * [.expectUnequal(value1, value2)](#common.assertion.expectUnequal)
        * [.expectTrue(value)](#common.assertion.expectTrue)
        * [.expectFalse(value)](#common.assertion.expectFalse)
        * [.expectDefined(value)](#common.assertion.expectDefined)
        * [.expectUndefined(value)](#common.assertion.expectUndefined)
        * [.expectUrlToBe()](#common.assertion.expectUrlToBe)
    * [.date](#common.date)
        * [.getToday([format])](#common.date.getToday) ⇒ <code>String</code>
        * [.getTomorrow([format])](#common.date.getTomorrow) ⇒ <code>String</code>
        * [.getNextMonth([format])](#common.date.getNextMonth) ⇒ <code>String</code>
        * [.getPreviousMonth([format])](#common.date.getPreviousMonth) ⇒ <code>String</code>
        * [.getNextYear([format])](#common.date.getNextYear) ⇒ <code>String</code>
        * [.getPreviousYear([format])](#common.date.getPreviousYear) ⇒ <code>String</code>
        * [.getSpecific(date, [format])](#common.date.getSpecific) ⇒ <code>String</code>
        * [.calculate([date], [format])](#common.date.calculate) ⇒ <code>String</code>
    * [.navigation](#common.navigation)
        * [.navigateToUrl(url)](#common.navigation.navigateToUrl)
        * [.navigateToUrlAndRetry(url, [retries], [interval])](#common.navigation.navigateToUrlAndRetry)
    * [.userInteraction](#common.userInteraction)
        * [.fillActive(value)](#common.userInteraction.fillActive)
        * [.fillActiveAndRetry(value, [retries], [interval])](#common.userInteraction.fillActiveAndRetry)
        * [.clearAndFillActive(value)](#common.userInteraction.clearAndFillActive)
        * [.clearAndFillActiveAndRetry(value, [retries], [interval])](#common.userInteraction.clearAndFillActiveAndRetry)
        * [.pressKey(keys)](#common.userInteraction.pressKey)
        * [.pressEnter()](#common.userInteraction.pressEnter)
        * [.pressTab()](#common.userInteraction.pressTab)
        * [.pressF4()](#common.userInteraction.pressF4)
        * [.pressBackspace()](#common.userInteraction.pressBackspace)
        * [.pressEscape()](#common.userInteraction.pressEscape)
        * [.pressArrowLeft()](#common.userInteraction.pressArrowLeft)
        * [.pressArrowRight()](#common.userInteraction.pressArrowRight)

<a name="common.assertion"></a>

### common.assertion
**Kind**: static class of [<code>common</code>](#common)  

* [.assertion](#common.assertion)
    * [.expectEqual(value1, value2)](#common.assertion.expectEqual)
    * [.expectUnequal(value1, value2)](#common.assertion.expectUnequal)
    * [.expectTrue(value)](#common.assertion.expectTrue)
    * [.expectFalse(value)](#common.assertion.expectFalse)
    * [.expectDefined(value)](#common.assertion.expectDefined)
    * [.expectUndefined(value)](#common.assertion.expectUndefined)
    * [.expectUrlToBe()](#common.assertion.expectUrlToBe)

<a name="common.assertion.expectEqual"></a>

#### assertion.expectEqual(value1, value2)
Expects the passed values to be equal.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| value1 | <code>Any</code> | Value (1) to be equal to value (2) |
| value2 | <code>Any</code> | Value (2) to be equal to value (1) |

**Example**  
```js
common.assertion.expectEqual(value1, value2);
```
<a name="common.assertion.expectUnequal"></a>

#### assertion.expectUnequal(value1, value2)
Expects the passed values to be unequal.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| value1 | <code>Any</code> | Value (1) to be unequal to value (2) |
| value2 | <code>Any</code> | Value (2) to be unequal to value (1) |

**Example**  
```js
common.assertion.expectUnequal(value1, value2);
```
<a name="common.assertion.expectTrue"></a>

#### assertion.expectTrue(value)
Expects the passed value to be true.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | Value to be equal to true |

**Example**  
```js
common.assertion.expectTrue(value);
```
<a name="common.assertion.expectFalse"></a>

#### assertion.expectFalse(value)
Expects the passed value to be false.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | The value to be false. |

**Example**  
```js
common.assertion.expectFalse(false);
```
<a name="common.assertion.expectDefined"></a>

#### assertion.expectDefined(value)
Expects the passed values is defined.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | Value to be defined (not undefined) |

**Example**  
```js
common.assertion.expectDefined(value);
```
<a name="common.assertion.expectUndefined"></a>

#### assertion.expectUndefined(value)
Expects the passed values is undefined.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | Value to be undefined |

**Example**  
```js
common.assertion.expectUndefined(value);
```
<a name="common.assertion.expectUrlToBe"></a>

#### assertion.expectUrlToBe()
Expects the url to be the passed value.

**Kind**: static method of [<code>assertion</code>](#common.assertion)  
**Example**  
```js
await common.assertion.expectUrlToBe("www.sap.com");
```
<a name="common.date"></a>

### common.date
**Kind**: static class of [<code>common</code>](#common)  

* [.date](#common.date)
    * [.getToday([format])](#common.date.getToday) ⇒ <code>String</code>
    * [.getTomorrow([format])](#common.date.getTomorrow) ⇒ <code>String</code>
    * [.getNextMonth([format])](#common.date.getNextMonth) ⇒ <code>String</code>
    * [.getPreviousMonth([format])](#common.date.getPreviousMonth) ⇒ <code>String</code>
    * [.getNextYear([format])](#common.date.getNextYear) ⇒ <code>String</code>
    * [.getPreviousYear([format])](#common.date.getPreviousYear) ⇒ <code>String</code>
    * [.getSpecific(date, [format])](#common.date.getSpecific) ⇒ <code>String</code>
    * [.calculate([date], [format])](#common.date.calculate) ⇒ <code>String</code>

<a name="common.date.getToday"></a>

#### date.getToday([format]) ⇒ <code>String</code>
Returns the current day in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getToday("mm/dd/yyyy");
```
<a name="common.date.getTomorrow"></a>

#### date.getTomorrow([format]) ⇒ <code>String</code>
Returns tomorrows date in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getTomorrow("mm/dd/yyyy");
```
<a name="common.date.getNextMonth"></a>

#### date.getNextMonth([format]) ⇒ <code>String</code>
Returns the current day one month later in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getNextMonth("mm/dd/yyyy");
```
<a name="common.date.getPreviousMonth"></a>

#### date.getPreviousMonth([format]) ⇒ <code>String</code>
Returns the current day one month before in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getPreviousMonth("mm/dd/yyyy");
```
<a name="common.date.getNextYear"></a>

#### date.getNextYear([format]) ⇒ <code>String</code>
Returns the current day one year later in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getNextYear("mm/dd/yyyy");
```
<a name="common.date.getPreviousYear"></a>

#### date.getPreviousYear([format]) ⇒ <code>String</code>
Returns the current day one year before in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getPreviousYear("mm/dd/yyyy");
```
<a name="common.date.getSpecific"></a>

#### date.getSpecific(date, [format]) ⇒ <code>String</code>
Returns a specific date in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | <code>String</code> |  | A specific date string. |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "dd.mm.yyyy.HH.MM", "datetime", "object"). |

**Example**  
```js
const date = await common.date.getSpecific("2020, 0, 17", "mm/dd/yyyy");
```
<a name="common.date.calculate"></a>

#### date.calculate([date], [format]) ⇒ <code>String</code>
Calculates the date based on the input parameter and returns it in the given format.

**Kind**: static method of [<code>date</code>](#common.date)  
**Returns**: <code>String</code> - The calculated date in the given format.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>String</code> | <code>&quot;today&quot;</code> | Supported values: today, tomorrow, nextMonth, previousMonth, nextYear, lastYear |
| [format] | <code>String</code> | <code>&quot;object&quot;</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "datetime", "object"). |

**Example**  
```js
const date = await common.date.calculate("today", "mm/dd/yyy");
```
<a name="common.navigation"></a>

### common.navigation
**Kind**: static class of [<code>common</code>](#common)  

* [.navigation](#common.navigation)
    * [.navigateToUrl(url)](#common.navigation.navigateToUrl)
    * [.navigateToUrlAndRetry(url, [retries], [interval])](#common.navigation.navigateToUrlAndRetry)

<a name="common.navigation.navigateToUrl"></a>

#### navigation.navigateToUrl(url)
Navigates to the passed url.

**Kind**: static method of [<code>navigation</code>](#common.navigation)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url. |

**Example**  
```js
await common.navigation.navigateToUrl("www.sap.com");
```
<a name="common.navigation.navigateToUrlAndRetry"></a>

#### navigation.navigateToUrlAndRetry(url, [retries], [interval])
Navigates to the passed url and retries the function in case of a failure.

**Kind**: static method of [<code>navigation</code>](#common.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | The url to navigate to. |
| [retries] | <code>Integer</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Integer</code> | <code>5000</code> | The interval of the retries (ms), can be set in config for all functions under params stepRetriesIntervals. |

**Example**  
```js
await common.navigation.navigateToUrlAndRetry("www.sap.com");
```
<a name="common.userInteraction"></a>

### common.userInteraction
**Kind**: static class of [<code>common</code>](#common)  

* [.userInteraction](#common.userInteraction)
    * [.fillActive(value)](#common.userInteraction.fillActive)
    * [.fillActiveAndRetry(value, [retries], [interval])](#common.userInteraction.fillActiveAndRetry)
    * [.clearAndFillActive(value)](#common.userInteraction.clearAndFillActive)
    * [.clearAndFillActiveAndRetry(value, [retries], [interval])](#common.userInteraction.clearAndFillActiveAndRetry)
    * [.pressKey(keys)](#common.userInteraction.pressKey)
    * [.pressEnter()](#common.userInteraction.pressEnter)
    * [.pressTab()](#common.userInteraction.pressTab)
    * [.pressF4()](#common.userInteraction.pressF4)
    * [.pressBackspace()](#common.userInteraction.pressBackspace)
    * [.pressEscape()](#common.userInteraction.pressEscape)
    * [.pressArrowLeft()](#common.userInteraction.pressArrowLeft)
    * [.pressArrowRight()](#common.userInteraction.pressArrowRight)

<a name="common.userInteraction.fillActive"></a>

#### userInteraction.fillActive(value)
Fills the active input with the given value.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | The value with witch the input should be filled. |

**Example**  
```js
await common.userInteraction.fillActive("My Value");
```
<a name="common.userInteraction.fillActiveAndRetry"></a>

#### userInteraction.fillActiveAndRetry(value, [retries], [interval])
Enters the given value to the active input field and retries the action in case it fails.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | The value with witch the input should be filled. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await common.userInteraction.fillActiveAndRetry("My Value");
```
<a name="common.userInteraction.clearAndFillActive"></a>

#### userInteraction.clearAndFillActive(value)
Clears and fills the active input.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | The value to fill. |

**Example**  
```js
await common.userInteraction.clearAndFillActive("My Value");
```
<a name="common.userInteraction.clearAndFillActiveAndRetry"></a>

#### userInteraction.clearAndFillActiveAndRetry(value, [retries], [interval])
CClears and fills the active input. Retries the action in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | The value to fill. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await common.userInteraction.clearAndFillActiveAndRetry("My Value");
```
<a name="common.userInteraction.pressKey"></a>

#### userInteraction.pressKey(keys)
Performs the specified keypress. Possible values: https://w3c.github.io/webdriver/#keyboard-actions

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>String</code> | The key or combination of keys to execute. |

**Example**  
```js
await common.userInteraction.pressKey("Clear");
```
**Example**  
```js
await common.userInteraction.pressKey("\uE009", "\uE00A", "KeyD");
```
<a name="common.userInteraction.pressEnter"></a>

#### userInteraction.pressEnter()
Performs the Enter keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressEnter();
```
<a name="common.userInteraction.pressTab"></a>

#### userInteraction.pressTab()
Performs the Tab keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressTab();
```
<a name="common.userInteraction.pressF4"></a>

#### userInteraction.pressF4()
Performs the F4 keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressF4();
```
<a name="common.userInteraction.pressBackspace"></a>

#### userInteraction.pressBackspace()
Performs the Backspace keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressBackspace();
```
<a name="common.userInteraction.pressEscape"></a>

#### userInteraction.pressEscape()
Performs the Escape keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressEscape();
```
<a name="common.userInteraction.pressArrowLeft"></a>

#### userInteraction.pressArrowLeft()
Performs the Arrow Left keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressArrowLeft();
```
<a name="common.userInteraction.pressArrowRight"></a>

#### userInteraction.pressArrowRight()
Performs the Arrow Right keypress.

**Kind**: static method of [<code>userInteraction</code>](#common.userInteraction)  
**Example**  
```js
await common.userInteraction.pressArrowRight();
```
<a name="util"></a>

## util
Global namespace for util modules.

**Kind**: global constant  

* [util](#util)
    * [.browser](#util.browser)
        * [.getBaseUrl()](#util.browser.getBaseUrl) ⇒ <code>String</code>
        * [.setBaseUrl(baseUrl:)](#util.browser.setBaseUrl)
        * [.logCurrentUrl()](#util.browser.logCurrentUrl)
        * [.getCurrentUrl()](#util.browser.getCurrentUrl)
        * [.resetFocus()](#util.browser.resetFocus)
        * [.sleep([duration])](#util.browser.sleep)
        * [.collectCoverage()](#util.browser.collectCoverage)
        * [.sleepAndCollectCoverage([duration])](#util.browser.sleepAndCollectCoverage)
        * [.refresh()](#util.browser.refresh)
        * [.clearBrowser([clearLocal], [clearSession], [clearCookies])](#util.browser.clearBrowser)
        * [.getBrowserName()](#util.browser.getBrowserName) ⇒ <code>String</code>
        * [.getUI5Version([timeout])](#util.browser.getUI5Version)
        * [.logUI5Version()](#util.browser.logUI5Version)
        * [.executeScript(command)](#util.browser.executeScript) ⇒ <code>Any</code>
        * [.waitForWindows()](#util.browser.waitForWindows)
        * [.switchToNewWindow(originalHandle, windowTitle)](#util.browser.switchToNewWindow)
        * [.switchToWindow(handle)](#util.browser.switchToWindow)
        * [.getCurrentWindow()](#util.browser.getCurrentWindow) ⇒ <code>Object</code>
    * [.console](#util.console)
        * [.log(message, [textColor], [backgroundColor], [brightness])](#util.console.log)
        * [.error(message)](#util.console.error)
        * [.warn(message)](#util.console.warn)
        * [.success(message)](#util.console.success)
        * [.info(message)](#util.console.info)
    * [.file](#util.file)
        * [.upload(files, [selector])](#util.file.upload)
        * [.parsePdf(pdfStream, renderingMethod)](#util.file.parsePdf) ⇒ <code>String</code>
        * [.expectPdfContainsText(pdfStream, text, renderingMethod)](#util.file.expectPdfContainsText)
        * [.expectPdfNotContainsText(pdfStream, text, renderingMethod)](#util.file.expectPdfNotContainsText)
    * [.formatter](#util.formatter)
        * [.sliceStringAt(input, slicePoint, length)](#util.formatter.sliceStringAt) ⇒ <code>String</code>
        * [.sliceStringAfter(input, slicePoint, length)](#util.formatter.sliceStringAfter) ⇒ <code>String</code>
        * [.trimString(input)](#util.formatter.trimString)
        * [.extractNumberFromString(input, [index])](#util.formatter.extractNumberFromString) ⇒ <code>String</code>
        * [.stringifyJSON(object)](#util.formatter.stringifyJSON) ⇒ <code>String</code>
        * [.addRemoveLeadingZeros(number, length)](#util.formatter.addRemoveLeadingZeros) ⇒ <code>String</code>
        * [.formatDate(date, format)](#util.formatter.formatDate) ⇒ <code>String</code>
    * [.function](#util.function)
        * [.retry(fct, args, [retries], [interval], [scope])](#util.function.retry)
        * [.executeOptional(fct, args)](#util.function.executeOptional)
    * [.system](#util.system)
        * [.getOS()](#util.system.getOS) ⇒ <code>String</code>

<a name="util.browser"></a>

### util.browser
**Kind**: static class of [<code>util</code>](#util)  

* [.browser](#util.browser)
    * [.getBaseUrl()](#util.browser.getBaseUrl) ⇒ <code>String</code>
    * [.setBaseUrl(baseUrl:)](#util.browser.setBaseUrl)
    * [.logCurrentUrl()](#util.browser.logCurrentUrl)
    * [.getCurrentUrl()](#util.browser.getCurrentUrl)
    * [.resetFocus()](#util.browser.resetFocus)
    * [.sleep([duration])](#util.browser.sleep)
    * [.collectCoverage()](#util.browser.collectCoverage)
    * [.sleepAndCollectCoverage([duration])](#util.browser.sleepAndCollectCoverage)
    * [.refresh()](#util.browser.refresh)
    * [.clearBrowser([clearLocal], [clearSession], [clearCookies])](#util.browser.clearBrowser)
    * [.getBrowserName()](#util.browser.getBrowserName) ⇒ <code>String</code>
    * [.getUI5Version([timeout])](#util.browser.getUI5Version)
    * [.logUI5Version()](#util.browser.logUI5Version)
    * [.executeScript(command)](#util.browser.executeScript) ⇒ <code>Any</code>
    * [.waitForWindows()](#util.browser.waitForWindows)
    * [.switchToNewWindow(originalHandle, windowTitle)](#util.browser.switchToNewWindow)
    * [.switchToWindow(handle)](#util.browser.switchToWindow)
    * [.getCurrentWindow()](#util.browser.getCurrentWindow) ⇒ <code>Object</code>

<a name="util.browser.getBaseUrl"></a>

#### browser.getBaseUrl() ⇒ <code>String</code>
Retrieves the baseUrl from the configuration file.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Returns**: <code>String</code> - The baseUrl.  
**Example**  
```js
const baseUrl = await util.browser.getBaseUrl();
```
<a name="util.browser.setBaseUrl"></a>

#### browser.setBaseUrl(baseUrl:)
Sets or overwrites the baseUrl in the configuration file.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Description |
| --- | --- | --- |
| baseUrl: | <code>String</code> | base URL to set |

**Example**  
```js
await util.browser.setBaseUrl("https://cc3-721.wdf.sap.corp/ui");
```
<a name="util.browser.logCurrentUrl"></a>

#### browser.logCurrentUrl()
Displays the current URL in the console.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.logCurrentUrl();
```
<a name="util.browser.getCurrentUrl"></a>

#### browser.getCurrentUrl()
Returns the current URL

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.getCurrentUrl();
```
<a name="util.browser.resetFocus"></a>

#### browser.resetFocus()
Resets the focus in case it set for a specific element.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.resetFocus();
```
<a name="util.browser.sleep"></a>

#### browser.sleep([duration])
Sleeps (pauses execution) for the passed duration.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>Number</code> | <code>1000</code> | The time to pause (ms). |

**Example**  
```js
await util.browser.sleep(30000);
```
<a name="util.browser.collectCoverage"></a>

#### browser.collectCoverage()
Trigger collection of coverage by coverage service.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.collectCoverage();
```
<a name="util.browser.sleepAndCollectCoverage"></a>

#### browser.sleepAndCollectCoverage([duration])
Trigger collection of coverage by coverage service.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>Number</code> | <code>1000</code> | The time to pause (ms). |

**Example**  
```js
await util.browser.sleepAndCollectCoverage(3000);
```
<a name="util.browser.refresh"></a>

#### browser.refresh()
Refreshes the page.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.refresh();
```
<a name="util.browser.clearBrowser"></a>

#### browser.clearBrowser([clearLocal], [clearSession], [clearCookies])
Clears the local and session cache and deletes all browser cookies.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [clearLocal] | <code>Boolean</code> | <code>true</code> | Specifies if the local cache will be cleared. |
| [clearSession] | <code>Boolean</code> | <code>true</code> | Specifies if the session cache will be cleared. |
| [clearCookies] | <code>Boolean</code> | <code>true</code> | Specifies if the cookies will be cleared. |

**Example**  
```js
await util.browser.clearBrowser();
```
<a name="util.browser.getBrowserName"></a>

#### browser.getBrowserName() ⇒ <code>String</code>
Retrieves the name of the current browser.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Returns**: <code>String</code> - The browser name.  
**Example**  
```js
const browserName = await util.browser.getBrowserName();
```
<a name="util.browser.getUI5Version"></a>

#### browser.getUI5Version([timeout])
Gets the UI5 version and creation date for UI5 based applications.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await util.browser.getUI5Version();
```
<a name="util.browser.logUI5Version"></a>

#### browser.logUI5Version()
Logs the UI5 version and creation date for UI5 based applications to the console.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.logUI5Version();
```
<a name="util.browser.executeScript"></a>

#### browser.executeScript(command) ⇒ <code>Any</code>
Executes the specified JavaScript command.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Returns**: <code>Any</code> - The result from the executed function.  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>String</code> | The command to execute. |

**Example**  
```js
await util.browser.executeScript(command);
```
<a name="util.browser.waitForWindows"></a>

#### browser.waitForWindows()
**Kind**: static method of [<code>browser</code>](#util.browser)  
**Example**  
```js
await util.browser.waitForWindows();
```
<a name="util.browser.switchToNewWindow"></a>

#### browser.switchToNewWindow(originalHandle, windowTitle)
Switches the window.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Description |
| --- | --- | --- |
| originalHandle | <code>String</code> | The main window handle. |
| windowTitle | <code>String</code> | Window Title to be expected |

**Example**  
```js
await util.browser.switchToNewWindow(originalHandle,);
```
<a name="util.browser.switchToWindow"></a>

#### browser.switchToWindow(handle)
Switches to the passed window.

**Kind**: static method of [<code>browser</code>](#util.browser)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>Object</code> | The window handle. |

**Example**  
```js
await util.browser.switchToWindow(originalWindowHandle);
```
<a name="util.browser.getCurrentWindow"></a>

#### browser.getCurrentWindow() ⇒ <code>Object</code>
Returns the current window handle.

**Kind**: static method of [<code>browser</code>](#util.browser)  
**Returns**: <code>Object</code> - The window handle.  
**Example**  
```js
await util.browser.getCurrentWindow();
```
<a name="util.console"></a>

### util.console
**Kind**: static class of [<code>util</code>](#util)  

* [.console](#util.console)
    * [.log(message, [textColor], [backgroundColor], [brightness])](#util.console.log)
    * [.error(message)](#util.console.error)
    * [.warn(message)](#util.console.warn)
    * [.success(message)](#util.console.success)
    * [.info(message)](#util.console.info)

<a name="util.console.log"></a>

#### console.log(message, [textColor], [backgroundColor], [brightness])
Logs a message to the console in the given color.

**Kind**: static method of [<code>console</code>](#util.console)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message to log. |
| [textColor] | <code>String</code> | The color of the text: "black, white", "red", "yellow", "green", "blue", "cyan", "magenta". |
| [backgroundColor] | <code>String</code> | The color of the background: "black, white", "red", "yellow", "green", "blue", "cyan", "magenta". |
| [brightness] | <code>String</code> | Adjusts the brightness of the color: "bright", "dim". Leave empty for default. |

**Example**  
```js
util.console.log("The document has been saved.", "green");
```
<a name="util.console.error"></a>

#### console.error(message)
Logs a error message to the console in red.

**Kind**: static method of [<code>console</code>](#util.console)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message to log. |

**Example**  
```js
util.console.error("Error: Please investigate.");
```
<a name="util.console.warn"></a>

#### console.warn(message)
Logs a warning message to the console in yellow.

**Kind**: static method of [<code>console</code>](#util.console)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message to log. |

**Example**  
```js
util.console.warn("Optional step not executed.");
```
<a name="util.console.success"></a>

#### console.success(message)
Logs a success message to the console in green.

**Kind**: static method of [<code>console</code>](#util.console)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message to log. |

**Example**  
```js
util.console.success("The document has been saved.");
```
<a name="util.console.info"></a>

#### console.info(message)
Logs a info message to the console in cyan.

**Kind**: static method of [<code>console</code>](#util.console)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message to log. |

**Example**  
```js
util.console.success("The document has been saved.");
```
<a name="util.file"></a>

### util.file
**Kind**: static class of [<code>util</code>](#util)  

* [.file](#util.file)
    * [.upload(files, [selector])](#util.file.upload)
    * [.parsePdf(pdfStream, renderingMethod)](#util.file.parsePdf) ⇒ <code>String</code>
    * [.expectPdfContainsText(pdfStream, text, renderingMethod)](#util.file.expectPdfContainsText)
    * [.expectPdfNotContainsText(pdfStream, text, renderingMethod)](#util.file.expectPdfNotContainsText)

<a name="util.file.upload"></a>

#### file.upload(files, [selector])
Uploads all the file/s by the paths given in the Array.

**Kind**: static method of [<code>file</code>](#util.file)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| files | <code>[ &#x27;Array&#x27; ].&lt;String&gt;</code> |  | Array with path/s of file/s to be uploaded. |
| [selector] | <code>Number</code> \| <code>Object</code> | <code>0</code> | Index or custom selector of uploader control, in case there are more then one present. Default value is index 0. |

**Example**  
```js
await util.file.upload(["path/to/text1.txt", "path/to/text2.txt"]); // uses the default uploader control
```
**Example**  
```js
await util.file.upload(["path/to/text1.txt", "path/to/text2.txt"], 1); // upload to second file uploader control on UI screen
```
**Example**  
```js
await util.file.upload(["path/to/text1.txt", "path/to/text2.txt"], selector); // upload to file uploader with matching selector
```
<a name="util.file.parsePdf"></a>

#### file.parsePdf(pdfStream, renderingMethod) ⇒ <code>String</code>
Parses the text from PDF stream. Returned text can be asserted to verify the PDF document content.

**Kind**: static method of [<code>file</code>](#util.file)  
**Returns**: <code>String</code> - The parsed PDF text.  
**See**: <a href="TODO">Parse PDF</a>  

| Param | Type | Description |
| --- | --- | --- |
| pdfStream | <code>Buffer</code> | PDF stream to be downloaded. |
| renderingMethod | <code>function</code> | Function to customize the parsing process. |

**Example**  
```js
await util.file.parsePdf(pdfStream, customRenderingMethod);
```
<a name="util.file.expectPdfContainsText"></a>

#### file.expectPdfContainsText(pdfStream, text, renderingMethod)
Parses the PDF and checks for given text to be contained in PDF.

**Kind**: static method of [<code>file</code>](#util.file)  
**See**: <a href="TODO">Parse pdf</a>  

| Param | Type | Description |
| --- | --- | --- |
| pdfStream | <code>Buffer</code> | PDF stream to be downloaded. |
| text | <code>String</code> | The expected text. |
| renderingMethod | <code>function</code> | Function to customize the parsing process. |

**Example**  
```js
await util.file.expectPdfContainsText(pdfStream, "abc");
```
<a name="util.file.expectPdfNotContainsText"></a>

#### file.expectPdfNotContainsText(pdfStream, text, renderingMethod)
Parses the PDF and checks for given text not to be contained in PDF.

**Kind**: static method of [<code>file</code>](#util.file)  
**See**: <a href="TODO">Parse pdf</a>  

| Param | Type | Description |
| --- | --- | --- |
| pdfStream | <code>Buffer</code> | PDF stream to be downloaded |
| text | <code>String</code> | The text expected to be not contained in the PDF. |
| renderingMethod | <code>function</code> | Function to customize the parsing process. |

**Example**  
```js
await util.file.expectPdfNotContainsText(pdfStream, "abc");
```
<a name="util.formatter"></a>

### util.formatter
**Kind**: static class of [<code>util</code>](#util)  

* [.formatter](#util.formatter)
    * [.sliceStringAt(input, slicePoint, length)](#util.formatter.sliceStringAt) ⇒ <code>String</code>
    * [.sliceStringAfter(input, slicePoint, length)](#util.formatter.sliceStringAfter) ⇒ <code>String</code>
    * [.trimString(input)](#util.formatter.trimString)
    * [.extractNumberFromString(input, [index])](#util.formatter.extractNumberFromString) ⇒ <code>String</code>
    * [.stringifyJSON(object)](#util.formatter.stringifyJSON) ⇒ <code>String</code>
    * [.addRemoveLeadingZeros(number, length)](#util.formatter.addRemoveLeadingZeros) ⇒ <code>String</code>
    * [.formatDate(date, format)](#util.formatter.formatDate) ⇒ <code>String</code>

<a name="util.formatter.sliceStringAt"></a>

#### formatter.sliceStringAt(input, slicePoint, length) ⇒ <code>String</code>
Slices the given string beginning at a specific substring.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  
**Returns**: <code>String</code> - The sliced string.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input string to slice. |
| slicePoint | <code>String</code> | The substring at which the input string is being sliced. |
| length | <code>Integer</code> | The required length of the returning string (starting at the index of the passed slice point). |

**Example**  
```js
const sliced = util.formatter.sliceStringAt("prefixNR12345postfix", "NR", 7);
// returns "NR12345"
```
<a name="util.formatter.sliceStringAfter"></a>

#### formatter.sliceStringAfter(input, slicePoint, length) ⇒ <code>String</code>
Slices the given string after a specific substring.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  
**Returns**: <code>String</code> - The sliced string.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input string to slice. |
| slicePoint | <code>String</code> | The substring after which the input string is being sliced. |
| length | <code>Integer</code> | The required length of the returning string (starting at the index after the passed slice point). |

**Example**  
```js
const sliced = util.formatter.sliceStringAfter("prefixNR12345postfix", "NR", 5);
// returns "12345"
```
<a name="util.formatter.trimString"></a>

#### formatter.trimString(input)
Removes whitespace from both sides of the given string.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input string to trim. |

**Example**  
```js
const trimmed = util.formatter.trimString("   value ");
// returns "value"
```
<a name="util.formatter.extractNumberFromString"></a>

#### formatter.extractNumberFromString(input, [index]) ⇒ <code>String</code>
Extracts all numbers from a string.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  
**Returns**: <code>String</code> - The extracted number.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>String</code> |  | The input string to extract the number. |
| [index] | <code>Integer</code> | <code>0</code> | If there are multiple numbers in the string you can pass an index to return a specific number. |

**Example**  
```js
const extracted = util.formatter.extractNumberFromString("prefixNR12345postfix");
// returns "12345"
```
**Example**  
```js
const extracted = util.formatter.extractNumberFromString("first12345 someText second 20 abc", 1);
// returns "20"
```
<a name="util.formatter.stringifyJSON"></a>

#### formatter.stringifyJSON(object) ⇒ <code>String</code>
Converts a JSON object to string.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  
**Returns**: <code>String</code> - The converted JSON object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The JSON to be converted. |

**Example**  
```js
console.log(`Printing the current selector: ${util.formatter.stringifyJSON(selector)}`);
```
<a name="util.formatter.addRemoveLeadingZeros"></a>

#### formatter.addRemoveLeadingZeros(number, length) ⇒ <code>String</code>
Adds or removes leading zeros to the passed number to format it to the required length.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  
**Returns**: <code>String</code> - The formatted number.  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>String</code> | The number to be formatted. |
| length | <code>Number</code> | The required length of the number. |

**Example**  
```js
const itemNumber = await util.formatter.addRemoveLeadingZeros(10, 5);
```
<a name="util.formatter.formatDate"></a>

#### formatter.formatDate(date, format) ⇒ <code>String</code>
formats date.

**Kind**: static method of [<code>formatter</code>](#util.formatter)  
**Returns**: <code>String</code> - The formatted date as string.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to be formatted. |
| format | <code>String</code> | The expected format ("mm/dd/yyyy", "dd.mm.yyyy", "dd/mm/yyyy", "yyyymmdd", "yyyy/mm/dd", "datetime", "object"). |

**Example**  
```js
const date = new Date(2020, 0, 17);
const formattedDate = util.formatter.formatDate(date, "mm/dd/yyyy");
// returns "01/17/2020"
```
<a name="util.function"></a>

### util.function
**Kind**: static class of [<code>util</code>](#util)  

* [.function](#util.function)
    * [.retry(fct, args, [retries], [interval], [scope])](#util.function.retry)
    * [.executeOptional(fct, args)](#util.function.executeOptional)

<a name="util.function.retry"></a>

#### function.retry(fct, args, [retries], [interval], [scope])
Retries the passed function n times with a specific interval until it executed successfully.

**Kind**: static method of [<code>function</code>](#util.function)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fct | <code>function</code> |  | The function to retry. |
| args | <code>Array</code> |  | An array of the arguments passed to the function. |
| [retries] | <code>Integer</code> | <code>3</code> | The number of retries. Can be set in config for all functions under "params" - "stepsRetries". |
| [interval] | <code>Integer</code> | <code>5000</code> | The interval of the retries (ms). Can be set in config for all functions under "params" - "stepRetriesIntervals". |
| [scope] | <code>Object</code> | <code></code> | The function scope. Defaults is the global object. |

**Example**  
```js
await util.function.retry(ui5.userInteraction.fill, [selector, value], 4, 10000);
```
**Example**  
```js
await util.function.retry(async () => {
 await ui5.userInteraction.fill(selector, "ABC");
}, [], 2, 30000);
```
<a name="util.function.executeOptional"></a>

#### function.executeOptional(fct, args)
Executes the given function optionally. If it fails, a promise will be returned anyway.

**Kind**: static method of [<code>function</code>](#util.function)  

| Param | Type | Description |
| --- | --- | --- |
| fct | <code>function</code> | The function to execute. |
| args | <code>Array</code> | An array of the arguments passed to the function. |

**Example**  
```js
await util.function.executeOptional(ui5.userInteraction.fill, [selector, value]);
```
**Example**  
```js
await util.function.executeOptional(async () => {
 await ui5.userInteraction.fill(selector, "ABC");
}, []);
```
<a name="util.system"></a>

### util.system
**Kind**: static class of [<code>util</code>](#util)  
<a name="util.system.getOS"></a>

#### system.getOS() ⇒ <code>String</code>
Returns the current operating system.

**Kind**: static method of [<code>system</code>](#util.system)  
**Returns**: <code>String</code> - AIX | Android | MacOS | FreeBSD | Linux | OpenBSD | Windows | SunOS  
**Example**  
```js
const os = await util.system.getOS();
```
<a name="ui5"></a>

## ui5
Global namespace for UI5 modules.

**Kind**: global constant  

* [ui5](#ui5)
    * [.assertion](#ui5.assertion)
        * [.expectAttributeToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectAttributeToBe)
        * [.expectAttributeToContain(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectAttributeToContain)
        * [.expectTextToBe(selector, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectTextToBe)
        * [.expectValueToBe(selector, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectValueToBe)
        * [.expectValueToBeDefined(selector, [index], [timeout])](#ui5.assertion.expectValueToBeDefined)
        * [.expectToBeNotEnabled(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeNotEnabled)
        * [.expectToBeEnabled(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeEnabled)
        * [.expectValidationError(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectValidationError)
        * [.expectValidationSuccess(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectValidationSuccess)
        * [.expectBindingPathToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectBindingPathToBe)
        * [.expectBindingContextPathToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectBindingContextPathToBe)
        * [.expectToBeVisible(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeVisible)
        * [.expectToBeVisibleInViewport(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeVisibleInViewport)
        * [.expectToBeNotVisible(selector, [index], [timeout])](#ui5.assertion.expectToBeNotVisible)
        * [.expectMessageToastTextToBe(text, [timeout])](#ui5.assertion.expectMessageToastTextToBe)
    * [.confirmationDialog](#ui5.confirmationDialog)
        * [.clickButton(text, [timeout])](#ui5.confirmationDialog.clickButton)
        * [.clickOk([timeout])](#ui5.confirmationDialog.clickOk)
        * [.clickCancel([timeout])](#ui5.confirmationDialog.clickCancel)
        * [.clickYes([timeout])](#ui5.confirmationDialog.clickYes)
        * [.clickNo([timeout])](#ui5.confirmationDialog.clickNo)
        * [.clickCreate([timeout])](#ui5.confirmationDialog.clickCreate)
        * [.clickDelete([timeout])](#ui5.confirmationDialog.clickDelete)
        * [.clickRevokeApproval([timeout])](#ui5.confirmationDialog.clickRevokeApproval)
    * [.control](#ui5.control)
        * [.execute(callbackFunction, selectorOrElement, args)](#ui5.control.execute)
        * [.getProperty(elem, propertyName)](#ui5.control.getProperty)
        * [.getAggregationProperty(elem, propertyName)](#ui5.control.getAggregationProperty)
        * [.getAssociationProperty(elem, propertyName)](#ui5.control.getAssociationProperty)
        * [.getBindingContextPathProperty(elem)](#ui5.control.getBindingContextPathProperty)
        * [.getPropertyBinding(elem, propertyName)](#ui5.control.getPropertyBinding) ⇒ <code>Array</code>
    * [.date](#ui5.date)
        * [.pick(selector, date)](#ui5.date.pick)
        * [.pickRange(selector, range)](#ui5.date.pickRange)
        * [.fillRange(selector, range)](#ui5.date.fillRange)
    * [.element](#ui5.element)
        * [.waitForAll(selector, [timeout])](#ui5.element.waitForAll)
        * [.getAllDisplayed(selector, [timeout])](#ui5.element.getAllDisplayed) ⇒ <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code>
        * [.getDisplayed(selector, [index], [timeout])](#ui5.element.getDisplayed) ⇒ <code>Object</code>
        * [.getByText(selector, value, [index], [timeout])](#ui5.element.getByText) ⇒ <code>Object</code>
        * [.getByChild(elementSelector, childSelector, [index], [timeout])](#ui5.element.getByChild) ⇒ <code>Object</code>
        * [.getByParent(elementSelector, parentSelector, [index], [timeout])](#ui5.element.getByParent) ⇒ <code>Object</code>
        * [.getId(selector, [index], [timeout])](#ui5.element.getId) ⇒ <code>String</code>
        * [.getPropertyValue(selector, property, [index], [timeout])](#ui5.element.getPropertyValue) ⇒ <code>String</code>
        * [.getValue(selector, [index], [timeout])](#ui5.element.getValue) ⇒ <code>String</code>
        * [.getBindingValue(selector, bindingContext, [index], [timeout])](#ui5.element.getBindingValue) ⇒ <code>String</code>
        * [.isVisible(selector, [index], [timeout])](#ui5.element.isVisible) ⇒ <code>Boolean</code>
        * [.highlight(selector, [duration], [color])](#ui5.element.highlight)
    * [.errorDialog](#ui5.errorDialog)
        * [.expectToBeVisible()](#ui5.errorDialog.expectToBeVisible)
        * [.clickClose()](#ui5.errorDialog.clickClose)
    * [.footerBar](#ui5.footerBar)
        * [.clickButton(text, [timeout])](#ui5.footerBar.clickButton)
        * [.clickApply([timeout])](#ui5.footerBar.clickApply)
        * [.clickSave([timeout])](#ui5.footerBar.clickSave)
        * [.clickCreate([timeout])](#ui5.footerBar.clickCreate)
        * [.clickCancel([timeout])](#ui5.footerBar.clickCancel)
        * [.clickCheck([timeout])](#ui5.footerBar.clickCheck)
        * [.clickOrder([timeout])](#ui5.footerBar.clickOrder)
        * [.clickPost([timeout])](#ui5.footerBar.clickPost)
        * [.clickAdd([timeout])](#ui5.footerBar.clickAdd)
    * [.mockserver](#ui5.mockserver)
        * [.waitForUi5ApplicationLoad(interval)](#ui5.mockserver.waitForUi5ApplicationLoad)
        * [.interactWithMockServer(mockServerPath, fnCallback, oParams)](#ui5.mockserver.interactWithMockServer)
        * [.attachFunctionBefore(method, mockServerPath, fnBeforeCallback, oParams)](#ui5.mockserver.attachFunctionBefore)
        * [.attachFunctionAfter(method, mockServerPath, fnAfterCallback, oParams)](#ui5.mockserver.attachFunctionAfter)
        * [.addNewRequest(method, mockServerPath, urlPathRegex, responseJsonPath, returnCode, isText, responseMessages, responseLocation)](#ui5.mockserver.addNewRequest)
        * [.removeRequest(method, mockServerPath, urlPathRegex)](#ui5.mockserver.removeRequest)
        * [.addOrOverrideRequest(method, mockServerPath, urlPathRegex, responseJsonPath, returnCode, isText, responseMessages, responseLocation)](#ui5.mockserver.addOrOverrideRequest)
        * [.startMockServer(mockServerPath)](#ui5.mockserver.startMockServer)
        * [.initMockServer(mockServerPath, mockServerOptions)](#ui5.mockserver.initMockServer)
        * [.initApplication(mockServerPath)](#ui5.mockserver.initApplication)
        * [.stopMockServer(mockServerPath)](#ui5.mockserver.stopMockServer)
        * [.loadMockDataFile(filePath, isText)](#ui5.mockserver.loadMockDataFile) ⇒ <code>String</code>
        * [.getEntitySetData(mockServerPath, entitySetName)](#ui5.mockserver.getEntitySetData) ⇒ <code>Array</code>
        * [.setEntitySetData(mockServerPath, entitySetName, entries)](#ui5.mockserver.setEntitySetData)
    * [.navigation](#ui5.navigation)
        * [.navigateToApplication(intent, [preventPopups], [verify])](#ui5.navigation.navigateToApplication)
        * [.navigateToApplicationAndRetry(intent, [preventPopups], [verify], [retries], [interval])](#ui5.navigation.navigateToApplicationAndRetry)
        * [.navigateToSystemAndApplication(system, intent, [closePopups], [verify])](#ui5.navigation.navigateToSystemAndApplication)
        * [.navigateToSystemAndApplicationAndRetry(system, intent, [closePopups], [verify], [retries], [interval])](#ui5.navigation.navigateToSystemAndApplicationAndRetry)
        * [.navigateToApplicationWithQueryParams(intent, queryParams, [preventPopups], [verify])](#ui5.navigation.navigateToApplicationWithQueryParams)
        * [.navigateToApplicationWithQueryParamsAndRetry(intent, queryParams, [preventPopups], [verify], [retries], [interval])](#ui5.navigation.navigateToApplicationWithQueryParamsAndRetry)
        * [.closePopups([timeout])](#ui5.navigation.closePopups)
        * [.expectUnsupportedNavigationPopup(navigationTarget)](#ui5.navigation.expectUnsupportedNavigationPopup)
    * [.navigationBar](#ui5.navigationBar)
        * [.clickBack([timeout])](#ui5.navigationBar.clickBack)
        * [.clickSapLogo([timeout])](#ui5.navigationBar.clickSapLogo)
        * [.clickUserIcon([timeout])](#ui5.navigationBar.clickUserIcon)
        * [.expectPageTitle(compareValue)](#ui5.navigationBar.expectPageTitle)
        * [.expectShellHeader([timeout])](#ui5.navigationBar.expectShellHeader)
    * [.qunit](#ui5.qunit)
        * [.executeTests(path)](#ui5.qunit.executeTests)
    * [.session](#ui5.session)
        * [.login(username, [password], [verify], [timeout])](#ui5.session.login)
        * [.loginFiori(username, [password], [verify])](#ui5.session.loginFiori)
        * [.loginSapCloud(username, [password], [verify])](#ui5.session.loginSapCloud)
        * [.loginCustom(username, [password], usernameFieldSelector, passwordFieldSelector, logonButtonSelector, [verify])](#ui5.session.loginCustom)
        * [.loginCustomViaConfig(username, password, [verify])](#ui5.session.loginCustomViaConfig)
        * [.logout([verify])](#ui5.session.logout)
        * [.switchUser(username, [password], [authenticator], [wait])](#ui5.session.switchUser)
        * [.expectLogoutText()](#ui5.session.expectLogoutText)
    * [.userInteraction](#ui5.userInteraction)
        * [.click(selector, [index], [timeout])](#ui5.userInteraction.click)
        * [.clickAndRetry(selector, [index], [timeout], [retries], [interval])](#ui5.userInteraction.clickAndRetry)
        * [.clickTab(selector, [index], [timeout])](#ui5.userInteraction.clickTab)
        * [.clickListItem(selector, [index], [timeout])](#ui5.userInteraction.clickListItem)
        * [.fill(selector, value, [index], [timeout])](#ui5.userInteraction.fill)
        * [.fillAndRetry(selector, value, [index], [timeout], [retries], [interval])](#ui5.userInteraction.fillAndRetry)
        * [.clear(selector, [index], [timeout])](#ui5.userInteraction.clear)
        * [.clearAndRetry(selector, [index], [timeout], [retries], [interval])](#ui5.userInteraction.clearAndRetry)
        * [.clearAndFill(selector, value, [index], [timeout])](#ui5.userInteraction.clearAndFill)
        * [.clearAndFillAndRetry(selector, value, [index], [timeout], [retries], [interval], [verify])](#ui5.userInteraction.clearAndFillAndRetry)
        * [.clearSmartFieldInput(selector, [index], [timeout])](#ui5.userInteraction.clearSmartFieldInput)
        * [.clearAndFillSmartFieldInput(selector, value, [index], [timeout])](#ui5.userInteraction.clearAndFillSmartFieldInput)
        * [.clearAndFillSmartFieldInputAndRetry(selector, value, [index], [timeout], [retries], [interval])](#ui5.userInteraction.clearAndFillSmartFieldInputAndRetry)
        * [.selectBox(selector, value, [index])](#ui5.userInteraction.selectBox)
        * [.selectComboBox(selector, value, [index])](#ui5.userInteraction.selectComboBox)
        * [.selectMultiComboBox(selector, values, [index])](#ui5.userInteraction.selectMultiComboBox)
        * [.clickSelectArrow(selector, [index])](#ui5.userInteraction.clickSelectArrow)
        * [.clickSelectArrowAndRetry(selector, [index], [retries], [interval])](#ui5.userInteraction.clickSelectArrowAndRetry)
        * [.scrollToElement(selector, [index], [alignment], [timeout])](#ui5.userInteraction.scrollToElement)
        * [.selectAll([selector], [index], [timeout])](#ui5.userInteraction.selectAll)
        * [.openF4Help(selector, [index], [timeout], useF4Key)](#ui5.userInteraction.openF4Help)
        * [.searchFor(selector, [index], [timeout], useEnter)](#ui5.userInteraction.searchFor)
        * [.resetSearch(selector, [index], [timeout])](#ui5.userInteraction.resetSearch)
        * [.doubleClick(selector, [index], [timeout])](#ui5.userInteraction.doubleClick)
        * [.rightClick(selector, [index], [timeout])](#ui5.userInteraction.rightClick)

<a name="ui5.assertion"></a>

### ui5.assertion
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.assertion](#ui5.assertion)
    * [.expectAttributeToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectAttributeToBe)
    * [.expectAttributeToContain(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectAttributeToContain)
    * [.expectTextToBe(selector, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectTextToBe)
    * [.expectValueToBe(selector, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectValueToBe)
    * [.expectValueToBeDefined(selector, [index], [timeout])](#ui5.assertion.expectValueToBeDefined)
    * [.expectToBeNotEnabled(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeNotEnabled)
    * [.expectToBeEnabled(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeEnabled)
    * [.expectValidationError(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectValidationError)
    * [.expectValidationSuccess(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectValidationSuccess)
    * [.expectBindingPathToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectBindingPathToBe)
    * [.expectBindingContextPathToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectBindingContextPathToBe)
    * [.expectToBeVisible(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeVisible)
    * [.expectToBeVisibleInViewport(selector, [index], [timeout], [loadPropertyTimeout])](#ui5.assertion.expectToBeVisibleInViewport)
    * [.expectToBeNotVisible(selector, [index], [timeout])](#ui5.assertion.expectToBeNotVisible)
    * [.expectMessageToastTextToBe(text, [timeout])](#ui5.assertion.expectMessageToastTextToBe)

<a name="ui5.assertion.expectAttributeToBe"></a>

#### assertion.expectAttributeToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])
Expects the passed elements attribute to be the compare value.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| attribute | <code>String</code> |  | The attribute to be compared. |
| compareValue | <code>String</code> \| <code>Boolean</code> \| <code>Number</code> \| <code>Object</code> |  | The compare value. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectAttributeToBe(selector, "text", "Hello");
```
<a name="ui5.assertion.expectAttributeToContain"></a>

#### assertion.expectAttributeToContain(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])
Expects the passed elements attribute to contain the compare value.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| attribute | <code>String</code> |  | The attribute to be compared. |
| compareValue | <code>String</code> |  | The compare value. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectAttributeToContain(selector, "text", "abc");
```
<a name="ui5.assertion.expectTextToBe"></a>

#### assertion.expectTextToBe(selector, compareValue, [index], [timeout], [loadPropertyTimeout])
Expects the passed elements text attribute to be the compare value.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| compareValue | <code>String</code> |  | The compare value. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectTextToBe(selector, "Hello");
```
<a name="ui5.assertion.expectValueToBe"></a>

#### assertion.expectValueToBe(selector, compareValue, [index], [timeout], [loadPropertyTimeout])
Expects the passed elements value attribute to be the compare value.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| compareValue | <code>String</code> \| <code>Number</code> |  | The compare value. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectValueToBe(selector, "123");
```
<a name="ui5.assertion.expectValueToBeDefined"></a>

#### assertion.expectValueToBeDefined(selector, [index], [timeout])
Expects the passed elements value to be defined.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.assertion.expectValueToBeDefined(selector);
```
<a name="ui5.assertion.expectToBeNotEnabled"></a>

#### assertion.expectToBeNotEnabled(selector, [index], [timeout], [loadPropertyTimeout])
Expects that the element is enabled to the user.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectToBeNotEnabled(selector);
```
<a name="ui5.assertion.expectToBeEnabled"></a>

#### assertion.expectToBeEnabled(selector, [index], [timeout], [loadPropertyTimeout])
Expects that the element is enabled to the user.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectToBeEnabled(selector);
```
<a name="ui5.assertion.expectValidationError"></a>

#### assertion.expectValidationError(selector, [index], [timeout], [loadPropertyTimeout])
Expects the "valueState" of the element to be "Error".

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectValidationError(selector);
```
<a name="ui5.assertion.expectValidationSuccess"></a>

#### assertion.expectValidationSuccess(selector, [index], [timeout], [loadPropertyTimeout])
Expects the valueState of the element to be "None".

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectValidationSuccess(selector);
```
<a name="ui5.assertion.expectBindingPathToBe"></a>

#### assertion.expectBindingPathToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])
Expects the passed elements attribute binding-path to contain the compare value

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| attribute | <code>String</code> |  | The attribute to be compared. |
| compareValue | <code>String</code> \| <code>Array.&lt;String&gt;</code> |  | The compare value(s). |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectBindingPathToBe(selector, "text", "Hello");
```
<a name="ui5.assertion.expectBindingContextPathToBe"></a>

#### assertion.expectBindingContextPathToBe(selector, attribute, compareValue, [index], [timeout], [loadPropertyTimeout])
Expects the passed elements binding-context-path to be the compare value.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| attribute | <code>String</code> |  | The attribute to be compared. |
| compareValue | <code>String</code> |  | The compare value. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectBindingContextPathToBe(selector, "text", "Hello");
```
<a name="ui5.assertion.expectToBeVisible"></a>

#### assertion.expectToBeVisible(selector, [index], [timeout], [loadPropertyTimeout])
Expects that the element is visible to the user.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectToBeVisible(selector);
```
<a name="ui5.assertion.expectToBeVisibleInViewport"></a>

#### assertion.expectToBeVisibleInViewport(selector, [index], [timeout], [loadPropertyTimeout])
Expects that the element is visible in the viewport.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [loadPropertyTimeout] | <code>Number</code> | <code>0</code> | The timeout to wait for a specific property to have the given compare value. |

**Example**  
```js
await ui5.assertion.expectToBeVisibleInViewport(selector);
```
<a name="ui5.assertion.expectToBeNotVisible"></a>

#### assertion.expectToBeNotVisible(selector, [index], [timeout])
Expects that the element is not visible to the user.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). Recommendation is to lower the timeout since the element is not expected to show up. |

**Example**  
```js
await ui5.assertion.expectToBeNotVisible(selector, 0, 5000);
```
<a name="ui5.assertion.expectMessageToastTextToBe"></a>

#### assertion.expectMessageToastTextToBe(text, [timeout])
Expects the message toast with the passed text.

**Kind**: static method of [<code>assertion</code>](#ui5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | The expected text. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.assertion.expectMessageToastTextToBe(text);
```
<a name="ui5.confirmationDialog"></a>

### ui5.confirmationDialog
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.confirmationDialog](#ui5.confirmationDialog)
    * [.clickButton(text, [timeout])](#ui5.confirmationDialog.clickButton)
    * [.clickOk([timeout])](#ui5.confirmationDialog.clickOk)
    * [.clickCancel([timeout])](#ui5.confirmationDialog.clickCancel)
    * [.clickYes([timeout])](#ui5.confirmationDialog.clickYes)
    * [.clickNo([timeout])](#ui5.confirmationDialog.clickNo)
    * [.clickCreate([timeout])](#ui5.confirmationDialog.clickCreate)
    * [.clickDelete([timeout])](#ui5.confirmationDialog.clickDelete)
    * [.clickRevokeApproval([timeout])](#ui5.confirmationDialog.clickRevokeApproval)

<a name="ui5.confirmationDialog.clickButton"></a>

#### confirmationDialog.clickButton(text, [timeout])
Clicks the button with the given text at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>Number</code> |  | The text of the button. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.confirmationDialog.clickButton("Ok");
```
<a name="ui5.confirmationDialog.clickOk"></a>

#### confirmationDialog.clickOk([timeout])
Clicks the "OK" button at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.confirmationDialog.clickOk();
```
<a name="ui5.confirmationDialog.clickCancel"></a>

#### confirmationDialog.clickCancel([timeout])
Clicks the "Cancel" button at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.confirmationDialog.clickCancel();
```
<a name="ui5.confirmationDialog.clickYes"></a>

#### confirmationDialog.clickYes([timeout])
Clicks the "Yes" button at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Description |
| --- | --- | --- |
| [timeout] | <code>Number</code> | The timeout to wait (default value: 30 sec). |

**Example**  
```js
await ui5.confirmationDialog.clickYes();
```
<a name="ui5.confirmationDialog.clickNo"></a>

#### confirmationDialog.clickNo([timeout])
Clicks the "Yes" button at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Description |
| --- | --- | --- |
| [timeout] | <code>Number</code> | The timeout to wait (default value: 30 sec). |

**Example**  
```js
await ui5.confirmationDialog.clickNo();
```
<a name="ui5.confirmationDialog.clickCreate"></a>

#### confirmationDialog.clickCreate([timeout])
Clicks the create button in the confirmation dialog

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Description |
| --- | --- | --- |
| [timeout] | <code>Number</code> | The timeout to wait (default value: 30 sec). |

**Example**  
```js
await ui5.confirmationDialog.clickCreate();
```
<a name="ui5.confirmationDialog.clickDelete"></a>

#### confirmationDialog.clickDelete([timeout])
Clicks the "Delete" button at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Description |
| --- | --- | --- |
| [timeout] | <code>Number</code> | The timeout to wait (default value: 30 sec). |

**Example**  
```js
await ui5.confirmationDialog.clickDelete();
```
<a name="ui5.confirmationDialog.clickRevokeApproval"></a>

#### confirmationDialog.clickRevokeApproval([timeout])
Clicks the "Revoke Approval" button at the confirmation dialog.

**Kind**: static method of [<code>confirmationDialog</code>](#ui5.confirmationDialog)  

| Param | Type | Description |
| --- | --- | --- |
| [timeout] | <code>Number</code> | The timeout to wait (default value: 30 sec). |

**Example**  
```js
await ui5.confirmationDialog.clickRevokeApproval();
```
<a name="ui5.control"></a>

### ui5.control
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.control](#ui5.control)
    * [.execute(callbackFunction, selectorOrElement, args)](#ui5.control.execute)
    * [.getProperty(elem, propertyName)](#ui5.control.getProperty)
    * [.getAggregationProperty(elem, propertyName)](#ui5.control.getAggregationProperty)
    * [.getAssociationProperty(elem, propertyName)](#ui5.control.getAssociationProperty)
    * [.getBindingContextPathProperty(elem)](#ui5.control.getBindingContextPathProperty)
    * [.getPropertyBinding(elem, propertyName)](#ui5.control.getPropertyBinding) ⇒ <code>Array</code>

<a name="ui5.control.execute"></a>

#### control.execute(callbackFunction, selectorOrElement, args)
Executes a native UI5 action as callback function in the browser on the given UI5 control.

**Kind**: static method of [<code>control</code>](#ui5.control)  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunction | <code>function</code> | The client script function to be used with the control instance. Caution: The first and last parameter is reserved for the mockserver instance and the promise resolve function - done. |
| selectorOrElement | <code>String</code> \| <code>Object</code> | The selector object or the dom element (retrieved from getDisplayedElement). |
| args | <code>Object</code> | An object containing the arguments to pass to the callback function. |

**Example**  
```js
const selector = {"elementProperties":{"metadata":"sap.m.StandardListItem", "id": "*categoryList-7"}};
const args = {"property": "text"};
const title = await ui5.control.execute(function (control, args, done) {
  done(control.getProperty(args.property));
}, selector, args);
```
<a name="ui5.control.getProperty"></a>

#### control.getProperty(elem, propertyName)
Gets the UI5 control property of the given element.

**Kind**: static method of [<code>control</code>](#ui5.control)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| propertyName | <code>String</code> | The property name of the control to retrieve the value from. |

**Example**  
```js
const selector = { "elementProperties":{"metadata":"sap.m.StandardListItem","mProperties":{ "title":[{"path":"CategoryName"}] }};
const elem = await ui5.control.locator.getDisplayedElement(selector);
const propertyName = "title";
const val = await ui5.control.getProperty(elem, propertyName);
```
<a name="ui5.control.getAggregationProperty"></a>

#### control.getAggregationProperty(elem, propertyName)
Gets the UI5 control aggregation property  of the given element.

**Kind**: static method of [<code>control</code>](#ui5.control)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| propertyName | <code>String</code> | The aggregation property name of the control to retrieve the value from. |

**Example**  
```js
const selector = { "elementProperties":{"metadata":"sap.m.StandardListItem","mProperties":{ "items":[{"path":"/Categories"}] }};
const elem = await ui5.control.locator.getDisplayedElement(selector);
const propertyName = "tooltip";
const val = await ui5.control.getAggregationProperty(elem, propertyName);
```
<a name="ui5.control.getAssociationProperty"></a>

#### control.getAssociationProperty(elem, propertyName)
Get UI control property

**Kind**: static method of [<code>control</code>](#ui5.control)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| propertyName | <code>String</code> | The association property name of the control to retrieve the value from. |

**Example**  
```js
const selector = { "elementProperties":{"metadata":"sap.m.MultiComboBox","mProperties":{}};
const elem = await ui5.control.locator.getDisplayedElement(selector);
const propertyName = "selectedItems";
const propertyValue = await ui5.control.getAssociationProperty(elem, propertyName);
```
<a name="ui5.control.getBindingContextPathProperty"></a>

#### control.getBindingContextPathProperty(elem)
Get UI control binding context path

**Kind**: static method of [<code>control</code>](#ui5.control)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |

**Example**  
```js
const selector = { "elementProperties":{"metadata":"sap.m.StandardListItem","mProperties":{"title":[{"path":"CategoryName"}] }};
const elem = await ui5.control.locator.getDisplayedElement(selector);
const context = await ui5.control.getBindingContextPathProperty(elem);
```
<a name="ui5.control.getPropertyBinding"></a>

#### control.getPropertyBinding(elem, propertyName) ⇒ <code>Array</code>
Get UI control property

**Kind**: static method of [<code>control</code>](#ui5.control)  
**Returns**: <code>Array</code> - Array of bindings for the specific property  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| propertyName | <code>String</code> | The property name to retrieve from the control binding |

**Example**  
```js
const selector = { "elementProperties":{"metadata":"sap.m.StandardListItem","mProperties":{ "title":[{"path":"CategoryName"}] }};
const elem = await ui5.control.locator.getDisplayedElement(selector);
const propertyName = "title";
const binding = await ui5.control.getPropertyBinding(elem, propertyName);
```
<a name="ui5.date"></a>

### ui5.date
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.date](#ui5.date)
    * [.pick(selector, date)](#ui5.date.pick)
    * [.pickRange(selector, range)](#ui5.date.pickRange)
    * [.fillRange(selector, range)](#ui5.date.fillRange)

<a name="ui5.date.pick"></a>

#### date.pick(selector, date)
Picks the passed date using the "DatePicker" with the given selector.

**Kind**: static method of [<code>date</code>](#ui5.date)  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>Selector</code> | The selector describing the element. |
| date | <code>Date</code> | The date object. |

**Example**  
```js
const today = await common.date.calculate("today");
await ui5.date.pick(selector, date);
```
<a name="ui5.date.pickRange"></a>

#### date.pickRange(selector, range)
Picks the passed date range using the "DatePicker" with the given selector.
Note that this will only work within the current month!

**Kind**: static method of [<code>date</code>](#ui5.date)  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>Selector</code> | The selector describing the element. |
| range | <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code> | The array of date objects containing start- and end date. |

**Example**  
```js
const start = await common.date.calculate("2020, 9, 20");
const end = await common.date.calculate("2021, 1, 3");
const range = [start, end];
await ui5.date.pickRange(selector, range);
```
<a name="ui5.date.fillRange"></a>

#### date.fillRange(selector, range)
Enters the passed date range to the date input with the given selector by providing the start- and end date.

**Kind**: static method of [<code>date</code>](#ui5.date)  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>Selector</code> | The selector describing the element. |
| range | <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code> | The array of date objects containing start- and end date. |

**Example**  
```js
const start = await common.date.calculate("2020, 9, 20", "dd.mm.yyyy");
const end = await common.date.calculate("2021, 1, 3", "dd.mm.yyyy");
const range = [start, end];
await ui5.date.fillRange(selector, range);
```
<a name="ui5.element"></a>

### ui5.element
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.element](#ui5.element)
    * [.waitForAll(selector, [timeout])](#ui5.element.waitForAll)
    * [.getAllDisplayed(selector, [timeout])](#ui5.element.getAllDisplayed) ⇒ <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code>
    * [.getDisplayed(selector, [index], [timeout])](#ui5.element.getDisplayed) ⇒ <code>Object</code>
    * [.getByText(selector, value, [index], [timeout])](#ui5.element.getByText) ⇒ <code>Object</code>
    * [.getByChild(elementSelector, childSelector, [index], [timeout])](#ui5.element.getByChild) ⇒ <code>Object</code>
    * [.getByParent(elementSelector, parentSelector, [index], [timeout])](#ui5.element.getByParent) ⇒ <code>Object</code>
    * [.getId(selector, [index], [timeout])](#ui5.element.getId) ⇒ <code>String</code>
    * [.getPropertyValue(selector, property, [index], [timeout])](#ui5.element.getPropertyValue) ⇒ <code>String</code>
    * [.getValue(selector, [index], [timeout])](#ui5.element.getValue) ⇒ <code>String</code>
    * [.getBindingValue(selector, bindingContext, [index], [timeout])](#ui5.element.getBindingValue) ⇒ <code>String</code>
    * [.isVisible(selector, [index], [timeout])](#ui5.element.isVisible) ⇒ <code>Boolean</code>
    * [.highlight(selector, [duration], [color])](#ui5.element.highlight)

<a name="ui5.element.waitForAll"></a>

#### element.waitForAll(selector, [timeout])
Waits for all elements matching the given selector.

**Kind**: static method of [<code>element</code>](#ui5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the elements. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.element.waitForAll(selector);
```
<a name="ui5.element.getAllDisplayed"></a>

#### element.getAllDisplayed(selector, [timeout]) ⇒ <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code>
Returns the visible elements with the given selector.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code> - - The found elements.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the elements. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await ui5.element.getAllDisplayed(selector);
```
<a name="ui5.element.getDisplayed"></a>

#### element.getDisplayed(selector, [index], [timeout]) ⇒ <code>Object</code>
Returns the visible element.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await ui5.element.getDisplayed(selector);
```
<a name="ui5.element.getByText"></a>

#### element.getByText(selector, value, [index], [timeout]) ⇒ <code>Object</code>
Returns the element with the given selector and text value.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The text value of the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await ui5.element.getByText(selector, "Home");
```
<a name="ui5.element.getByChild"></a>

#### element.getByChild(elementSelector, childSelector, [index], [timeout]) ⇒ <code>Object</code>
Gets an element by its selector and child selector.
Can be used as unique combination between element and child properties when multiple elements have the same properties.
Note: For nested selectors, all properties except of the "elementProperties" are being ignored.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elementSelector | <code>String</code> |  | The selector describing the requested element. |
| childSelector | <code>String</code> |  | The selector describing a child element of the requested element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case the combination applies to more than one element). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elementSelector = {
 "elementProperties": {...}
};
const childSelector = {
 "elementProperties": {...}
};
const elem = await ui5.element.getByChild(elementSelector, childSelector);
```
<a name="ui5.element.getByParent"></a>

#### element.getByParent(elementSelector, parentSelector, [index], [timeout]) ⇒ <code>Object</code>
Gets an element by its selector and parent selector. 
Can be used as unique combination between element and parent properties when multiple elements have the same properties.
Note: For nested selectors, all properties except of the "elementProperties" are being ignored.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elementSelector | <code>String</code> |  | The selector describing the requested element. |
| parentSelector | <code>String</code> |  | The selector describing the parent element of the requested element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case the combination applies to more than one element). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elementSelector = {
 "elementProperties": {...}
};
const parentSelector = {
 "elementProperties": {...}
};
const elem = await ui5.element.getByParent(elementSelector, parentSelector);
```
<a name="ui5.element.getId"></a>

#### element.getId(selector, [index], [timeout]) ⇒ <code>String</code>
Returns the id of the element with the given selector.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>String</code> - The id of the element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elemId = await ui5.element.getId(selector);
```
<a name="ui5.element.getPropertyValue"></a>

#### element.getPropertyValue(selector, property, [index], [timeout]) ⇒ <code>String</code>
Returns the UI5 property value of the passed element.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>String</code> - The property value of the element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| property | <code>String</code> |  | The property of the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elemValue = await ui5.element.getPropertyValue(selector, "text");
```
<a name="ui5.element.getValue"></a>

#### element.getValue(selector, [index], [timeout]) ⇒ <code>String</code>
Returns the inner value of the passed element.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>String</code> - The value of the element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elemValue = await ui5.element.getValue(selector);
```
<a name="ui5.element.getBindingValue"></a>

#### element.getBindingValue(selector, bindingContext, [index], [timeout]) ⇒ <code>String</code>
Returns the value of the given binding property for a specific element.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>String</code> - The binding property value.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| bindingContext | <code>String</code> |  | The binding property to retrieve. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elemBindingValue = await ui5.element.getBindingValue(selector, "InvoiceGrossAmount");
```
<a name="ui5.element.isVisible"></a>

#### element.isVisible(selector, [index], [timeout]) ⇒ <code>Boolean</code>
Determines if the element is visible.

**Kind**: static method of [<code>element</code>](#ui5.element)  
**Returns**: <code>Boolean</code> - The bool value 'true' or 'false' if the element is visible or not.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const isVisible = await ui5.element.isVisible(selector);
```
<a name="ui5.element.highlight"></a>

#### element.highlight(selector, [duration], [color])
Highlights the element with the given selector.

**Kind**: static method of [<code>element</code>](#ui5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [duration] | <code>Number</code> | <code>2000</code> | The duration of the highlighting (ms). |
| [color] | <code>String</code> | <code>&quot;red&quot;</code> | The color of the highlighting (CSS color). |

**Example**  
```js
await ui5.element.highlight(selector, 3000, "green");
```
<a name="ui5.errorDialog"></a>

### ui5.errorDialog
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.errorDialog](#ui5.errorDialog)
    * [.expectToBeVisible()](#ui5.errorDialog.expectToBeVisible)
    * [.clickClose()](#ui5.errorDialog.clickClose)

<a name="ui5.errorDialog.expectToBeVisible"></a>

#### errorDialog.expectToBeVisible()
Expects that the error dialog is visible on the page.

**Kind**: static method of [<code>errorDialog</code>](#ui5.errorDialog)  
**Example**  
```js
await ui5.errorDialog.expectToBeVisible();
```
<a name="ui5.errorDialog.clickClose"></a>

#### errorDialog.clickClose()
Clicks the 'Close' button at the error dialog.

**Kind**: static method of [<code>errorDialog</code>](#ui5.errorDialog)  
**Example**  
```js
await ui5.errorDialog.clickClose();
```
<a name="ui5.footerBar"></a>

### ui5.footerBar
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.footerBar](#ui5.footerBar)
    * [.clickButton(text, [timeout])](#ui5.footerBar.clickButton)
    * [.clickApply([timeout])](#ui5.footerBar.clickApply)
    * [.clickSave([timeout])](#ui5.footerBar.clickSave)
    * [.clickCreate([timeout])](#ui5.footerBar.clickCreate)
    * [.clickCancel([timeout])](#ui5.footerBar.clickCancel)
    * [.clickCheck([timeout])](#ui5.footerBar.clickCheck)
    * [.clickOrder([timeout])](#ui5.footerBar.clickOrder)
    * [.clickPost([timeout])](#ui5.footerBar.clickPost)
    * [.clickAdd([timeout])](#ui5.footerBar.clickAdd)

<a name="ui5.footerBar.clickButton"></a>

#### footerBar.clickButton(text, [timeout])
Clicks the button with the given text at the footer bar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>Number</code> |  | The text of the button. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickButton("Ok");
```
<a name="ui5.footerBar.clickApply"></a>

#### footerBar.clickApply([timeout])
Clicks the 'Apply' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickApply();
```
<a name="ui5.footerBar.clickSave"></a>

#### footerBar.clickSave([timeout])
Clicks the 'Save' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickSave();
```
<a name="ui5.footerBar.clickCreate"></a>

#### footerBar.clickCreate([timeout])
Clicks the 'Create' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickCreate();
```
<a name="ui5.footerBar.clickCancel"></a>

#### footerBar.clickCancel([timeout])
Clicks the 'Cancel' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickCancel();
```
<a name="ui5.footerBar.clickCheck"></a>

#### footerBar.clickCheck([timeout])
Clicks the 'Check' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickCheck();
```
<a name="ui5.footerBar.clickOrder"></a>

#### footerBar.clickOrder([timeout])
Clicks the 'Order' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickOrder();
```
<a name="ui5.footerBar.clickPost"></a>

#### footerBar.clickPost([timeout])
Clicks the 'Post' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickPost();
```
<a name="ui5.footerBar.clickAdd"></a>

#### footerBar.clickAdd([timeout])
Clicks the 'Add' button at the footer toolbar.

**Kind**: static method of [<code>footerBar</code>](#ui5.footerBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.footerBar.clickAdd();
```
<a name="ui5.mockserver"></a>

### ui5.mockserver
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.mockserver](#ui5.mockserver)
    * [.waitForUi5ApplicationLoad(interval)](#ui5.mockserver.waitForUi5ApplicationLoad)
    * [.interactWithMockServer(mockServerPath, fnCallback, oParams)](#ui5.mockserver.interactWithMockServer)
    * [.attachFunctionBefore(method, mockServerPath, fnBeforeCallback, oParams)](#ui5.mockserver.attachFunctionBefore)
    * [.attachFunctionAfter(method, mockServerPath, fnAfterCallback, oParams)](#ui5.mockserver.attachFunctionAfter)
    * [.addNewRequest(method, mockServerPath, urlPathRegex, responseJsonPath, returnCode, isText, responseMessages, responseLocation)](#ui5.mockserver.addNewRequest)
    * [.removeRequest(method, mockServerPath, urlPathRegex)](#ui5.mockserver.removeRequest)
    * [.addOrOverrideRequest(method, mockServerPath, urlPathRegex, responseJsonPath, returnCode, isText, responseMessages, responseLocation)](#ui5.mockserver.addOrOverrideRequest)
    * [.startMockServer(mockServerPath)](#ui5.mockserver.startMockServer)
    * [.initMockServer(mockServerPath, mockServerOptions)](#ui5.mockserver.initMockServer)
    * [.initApplication(mockServerPath)](#ui5.mockserver.initApplication)
    * [.stopMockServer(mockServerPath)](#ui5.mockserver.stopMockServer)
    * [.loadMockDataFile(filePath, isText)](#ui5.mockserver.loadMockDataFile) ⇒ <code>String</code>
    * [.getEntitySetData(mockServerPath, entitySetName)](#ui5.mockserver.getEntitySetData) ⇒ <code>Array</code>
    * [.setEntitySetData(mockServerPath, entitySetName, entries)](#ui5.mockserver.setEntitySetData)

<a name="ui5.mockserver.waitForUi5ApplicationLoad"></a>

#### mockserver.waitForUi5ApplicationLoad(interval)
Waits for the UI5 framework to load and makes sure XHR request finished und busy indicators are not visible anymore.

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| interval | <code>Integer</code> | The intervals to use when waiting UI5 to load. |

**Example**  
```js
await ui5.mockserver.waitForUi5ApplicationLoad(100);
```
<a name="ui5.mockserver.interactWithMockServer"></a>

#### mockserver.interactWithMockServer(mockServerPath, fnCallback, oParams)
Execute client script function to enable interaction with mockserver instance [you can write code in ui5 app context]

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver instance |
| fnCallback | <code>String</code> \| <code>Object</code> | The client script function that you can use to interact with your mockserver instance. [Caution] The first and last parameter is reserved (1st param is the mockserver instance and last parameter the promise resolve function - done) |
| oParams | <code>String</code> | Additional parameters you would like to inject in your client script function |

**Example**  
```js
await ui5.mockserver.interactWithMockServer("path/to/project/localService/main/mockserver", fnCallback, oParams);
```
<a name="ui5.mockserver.attachFunctionBefore"></a>

#### mockserver.attachFunctionBefore(method, mockServerPath, fnBeforeCallback, oParams)
Attaches a callback function in mockserver attachBefore event to be executed

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | The attachAfter http method [GET or POST]. |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method so the mockserver instance can be consumed]. |
| fnBeforeCallback | <code>String</code> \| <code>Object</code> | The callback function to be used in the native attachBefore method as described (https://sapui5.hana.ondemand.com/#/api/sap.ui.core.ui5.mockserver%23methods/Summary) |
| oParams | <code>Object</code> | Additional parameters you would like to inject in your client script function |

**Example**  
```js
await ui5.mockserver.attachFunctionBefore("GET", "path/to/project/localService/main/mockserver", fnBeforeCallback, oParams);
```
<a name="ui5.mockserver.attachFunctionAfter"></a>

#### mockserver.attachFunctionAfter(method, mockServerPath, fnAfterCallback, oParams)
Attaches a callback function in mockserver attachAfter event to be executed

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | The attachAfter http method [GET or POST]. |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method so the mockserver instance can be consumed]. |
| fnAfterCallback | <code>String</code> \| <code>Object</code> | The callback function to be used in the native attachAfter method as described (https://sapui5.hana.ondemand.com/#/api/sap.ui.core.ui5.mockserver%23methods/Summary) |
| oParams | <code>Object</code> | Additional parameters you would like to inject in your client script function |

**Example**  
```js
await ui5.mockserver.attachFunctionAfter("GET", "path/to/project/localService/main/mockserver",  fnAfterCallback);
```
<a name="ui5.mockserver.addNewRequest"></a>

#### mockserver.addNewRequest(method, mockServerPath, urlPathRegex, responseJsonPath, returnCode, isText, responseMessages, responseLocation)
Adds new mock request

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | The http method [GET,POST..]. |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| urlPathRegex | <code>String</code> | The url path regex to filter the requests |
| responseJsonPath | <code>String</code> | The json object or the path to your json file to be used as response [use relative path from the html page started]. |
| returnCode | <code>Integer</code> | The http response code to simulate for this mock request. |
| isText | <code>Boolean</code> | If true then content type is text/plain otherwise application/json. |
| responseMessages | <code>String</code> | Mocks the gw sap-message response messages [Don't forget to stringify your json before: JSON.stringify(msg)] |
| responseLocation | <code>String</code> | Mocks the location response messages header |

**Example**  
```js
await ui5.mockserver.addNewRequest("GET","path/to/project/localService/main/mockserver", "*.Headers.*", "path/to/project/localService/main/mockdata/test.json", 200, true, JSON.stringify(msg));
```
<a name="ui5.mockserver.removeRequest"></a>

#### mockserver.removeRequest(method, mockServerPath, urlPathRegex)
Removes request mock [Doesn't work currently - Mockserver bug]

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | The http method [GET,POST..]. |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| urlPathRegex | <code>String</code> | The url path regex to filter the requests |

**Example**  
```js
await ui5.mockserver.removeRequest("GET","path/to/project/localService/main/mockserver", "*.Headers.*");
```
<a name="ui5.mockserver.addOrOverrideRequest"></a>

#### mockserver.addOrOverrideRequest(method, mockServerPath, urlPathRegex, responseJsonPath, returnCode, isText, responseMessages, responseLocation)
Adds new or overrides an existing mock request

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | The http method [GET,POST..]. |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| urlPathRegex | <code>String</code> | The url path regex to filter the requests |
| responseJsonPath | <code>String</code> | The json object or the path to your json file to be used as response [use relative path from the html page started]. |
| returnCode | <code>Integer</code> | The http response code to simulate for this mock request. |
| isText | <code>Boolean</code> | If true then content type is text/plain otherwise application/json. |
| responseMessages | <code>String</code> | Mocks the gw sap-message response messages [Don't forget to stringify your json before: JSON.stringify(msg)] |
| responseLocation | <code>String</code> | Mocks the location response messages header |

**Example**  
```js
await ui5.mockserver.addOrOverrideRequest("GET","path/to/project/localService/main/mockserver", "*.Headers.*", "path/to/project/localService/main/mockdata/test.json", 200, true, JSON.stringify(msg));
```
<a name="ui5.mockserver.startMockServer"></a>

#### mockserver.startMockServer(mockServerPath)
(Re-)Starts mock server instance

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |

**Example**  
```js
await ui5.mockserver.startMockServer("path/to/project/localService/main/mockserver");
```
<a name="ui5.mockserver.initMockServer"></a>

#### mockserver.initMockServer(mockServerPath, mockServerOptions)
Initializes the provide mockserver instance on the fly

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| mockServerOptions | <code>String</code> | The mock server options |

**Example**  
```js
await ui5.mockserver.initMockServer("path/to/project/localService/main/mockserver", mockServerOptions);
```
<a name="ui5.mockserver.initApplication"></a>

#### mockserver.initApplication(mockServerPath)
Initializes the application [Used in the beggining of script, once the mockserver is fully initialized and request mocking is done]

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |

**Example**  
```js
await ui5.mockserver.initApplication("path/to/project/localService/main/mockserver");
```
<a name="ui5.mockserver.stopMockServer"></a>

#### mockserver.stopMockServer(mockServerPath)
Stops the mockserver instance

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |

**Example**  
```js
await ui5.mockserver.stopMockServer("path/to/project/localService/main/mockserver");
```
<a name="ui5.mockserver.loadMockDataFile"></a>

#### mockserver.loadMockDataFile(filePath, isText) ⇒ <code>String</code>
Loads a mock data file

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  
**Returns**: <code>String</code> - The json object  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| isText | <code>Boolean</code> | If true then content type is text/plain otherwise application/json. |

**Example**  
```js
await ui5.mockserver.loadMockDataFile("path/to/project/mockData/myData.json", true);
```
<a name="ui5.mockserver.getEntitySetData"></a>

#### mockserver.getEntitySetData(mockServerPath, entitySetName) ⇒ <code>Array</code>
Retrieves entity data

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  
**Returns**: <code>Array</code> - An array of json objects  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| entitySetName | <code>String</code> | The entity set name |

**Example**  
```js
await ui5.mockserver.getEntitySetData("path/to/project/localService/main/mockserver", "Headers");
```
<a name="ui5.mockserver.setEntitySetData"></a>

#### mockserver.setEntitySetData(mockServerPath, entitySetName, entries)
Override entity data entries

**Kind**: static method of [<code>mockserver</code>](#ui5.mockserver)  

| Param | Type | Description |
| --- | --- | --- |
| mockServerPath | <code>String</code> | The full path to your mockserver file [make sure you implemented getMockServer method in this file to return the mockserver instance]. |
| entitySetName | <code>String</code> | The entity name |
| entries | <code>String</code> | The json object to be used as data to be inserted [use relative path from the html page started]. |

**Example**  
```js
await ui5.mockserver.setEntitySetData("path/to/project/localService/main/mockserver", "Headers", entries);
```
<a name="ui5.navigation"></a>

### ui5.navigation
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.navigation](#ui5.navigation)
    * [.navigateToApplication(intent, [preventPopups], [verify])](#ui5.navigation.navigateToApplication)
    * [.navigateToApplicationAndRetry(intent, [preventPopups], [verify], [retries], [interval])](#ui5.navigation.navigateToApplicationAndRetry)
    * [.navigateToSystemAndApplication(system, intent, [closePopups], [verify])](#ui5.navigation.navigateToSystemAndApplication)
    * [.navigateToSystemAndApplicationAndRetry(system, intent, [closePopups], [verify], [retries], [interval])](#ui5.navigation.navigateToSystemAndApplicationAndRetry)
    * [.navigateToApplicationWithQueryParams(intent, queryParams, [preventPopups], [verify])](#ui5.navigation.navigateToApplicationWithQueryParams)
    * [.navigateToApplicationWithQueryParamsAndRetry(intent, queryParams, [preventPopups], [verify], [retries], [interval])](#ui5.navigation.navigateToApplicationWithQueryParamsAndRetry)
    * [.closePopups([timeout])](#ui5.navigation.closePopups)
    * [.expectUnsupportedNavigationPopup(navigationTarget)](#ui5.navigation.expectUnsupportedNavigationPopup)

<a name="ui5.navigation.navigateToApplication"></a>

#### navigation.navigateToApplication(intent, [preventPopups], [verify])
Navigates to the application via the passed intent. The intent will be added to the baseUrl maintained in the config.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| intent | <code>String</code> |  | The intent of the application. |
| [preventPopups] | <code>Boolean</code> | <code>false</code> | Specifies if random popup appearance should be prevented. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the url should be asserted after the navigation. |

**Example**  
```js
await ui5.navigation.navigateToApplication("PurchaseOrder-manage");
```
<a name="ui5.navigation.navigateToApplicationAndRetry"></a>

#### navigation.navigateToApplicationAndRetry(intent, [preventPopups], [verify], [retries], [interval])
Navigates to the application via the passed intent, and retries in case it fails.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| intent | <code>String</code> |  | The intent of the app. |
| [preventPopups] | <code>Boolean</code> | <code>false</code> | Specifies if random popup appearance should be prevented. Might not work for specific popups. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the url should be asserted after the navigation. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.navigation.navigateToApplicationAndRetry("PurchaseOrder-manage");
```
<a name="ui5.navigation.navigateToSystemAndApplication"></a>

#### navigation.navigateToSystemAndApplication(system, intent, [closePopups], [verify])
Navigates within the passed system to the application via the passed intent.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| system | <code>String</code> |  | The system url. |
| intent | <code>String</code> |  | The intent of the application. |
| [closePopups] | <code>Boolean</code> | <code>false</code> | Specifies if random popups should be closed after the navigation. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the url should be asserted after the navigation. |

**Example**  
```js
await ui5.navigation.navigateToSystemAndApplication("cc2-715.wdf.sap.corp", "PurchaseOrder-manage");
```
<a name="ui5.navigation.navigateToSystemAndApplicationAndRetry"></a>

#### navigation.navigateToSystemAndApplicationAndRetry(system, intent, [closePopups], [verify], [retries], [interval])
Navigates within the passed system to the application via the passed intent, and retries in case it fails.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| system | <code>String</code> |  | The system url. |
| intent | <code>String</code> |  | The intent of the application. |
| [closePopups] | <code>Boolean</code> | <code>false</code> | Specifies if random popups should be closed after the navigation. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the url should be asserted after the navigation. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.navigation.navigateToSystemAndApplicationAndRetry("cc2-715.wdf.sap.corp", "PurchaseOrder-manage");
```
<a name="ui5.navigation.navigateToApplicationWithQueryParams"></a>

#### navigation.navigateToApplicationWithQueryParams(intent, queryParams, [preventPopups], [verify])
Navigates to the application with the passed queryParams via the passed intent.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| intent | <code>String</code> |  | The intent of the app. |
| queryParams | <code>String</code> |  | [OPTIONAL] Add url query params. |
| [preventPopups] | <code>Boolean</code> | <code>false</code> | Specifies if random popup appearance should be prevented. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the url should be asserted after the navigation. |

**Example**  
```js
const intent = ui5.appIntents.managePurchaseOrders;
const queryParams = "?sap-language=EN&responderOn=true";
await ui5.navigation.navigateToApplicationWithQueryParams(intent, queryParams);
```
<a name="ui5.navigation.navigateToApplicationWithQueryParamsAndRetry"></a>

#### navigation.navigateToApplicationWithQueryParamsAndRetry(intent, queryParams, [preventPopups], [verify], [retries], [interval])
Navigates to the application via the passed intent, and retries in case it fails.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| intent | <code>String</code> |  | The intent of the app. |
| queryParams | <code>String</code> |  | [OPTIONAL] Add url query params. |
| [preventPopups] | <code>Boolean</code> | <code>false</code> | Specifies if random popup appearance should be prevented. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the url should be asserted after the navigation. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
const intent = ui5.appIntents.managePurchaseOrders;
const queryParams = "?sap-language=EN&responderOn=true";
await ui5.navigation.navigateToApplicationWithQueryParamsAndRetry(intent, queryParams);
```
<a name="ui5.navigation.closePopups"></a>

#### navigation.closePopups([timeout])
Closes all popups if they occur after navigating to a specific page.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Integer</code> | <code>15000</code> | The timeout to wait. |

**Example**  
```js
await ui5.navigation.closePopups();
```
<a name="ui5.navigation.expectUnsupportedNavigationPopup"></a>

#### navigation.expectUnsupportedNavigationPopup(navigationTarget)
Expects navigation to an app that is not supported.
This can be the case for Mocked tests when the application does not exist or when the app is not included in a role.

**Kind**: static method of [<code>navigation</code>](#ui5.navigation)  

| Param | Type | Description |
| --- | --- | --- |
| navigationTarget | <code>String</code> | The selector describing the element. |

**Example**  
```js
await ui5.navigation.expectUnsupportedNavigationPopup("#SupplierInvoice-display?FiscalYear=1234&SupplierInvoice=1234567890");
```
<a name="ui5.navigationBar"></a>

### ui5.navigationBar
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.navigationBar](#ui5.navigationBar)
    * [.clickBack([timeout])](#ui5.navigationBar.clickBack)
    * [.clickSapLogo([timeout])](#ui5.navigationBar.clickSapLogo)
    * [.clickUserIcon([timeout])](#ui5.navigationBar.clickUserIcon)
    * [.expectPageTitle(compareValue)](#ui5.navigationBar.expectPageTitle)
    * [.expectShellHeader([timeout])](#ui5.navigationBar.expectShellHeader)

<a name="ui5.navigationBar.clickBack"></a>

#### navigationBar.clickBack([timeout])
Navigates one layer back.

**Kind**: static method of [<code>navigationBar</code>](#ui5.navigationBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.navigationBar.clickBack();
```
<a name="ui5.navigationBar.clickSapLogo"></a>

#### navigationBar.clickSapLogo([timeout])
Clicks at the SAP Logo.

**Kind**: static method of [<code>navigationBar</code>](#ui5.navigationBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.navigationBar.clickSapLogo();
```
<a name="ui5.navigationBar.clickUserIcon"></a>

#### navigationBar.clickUserIcon([timeout])
Clicks at the Account Icon.

**Kind**: static method of [<code>navigationBar</code>](#ui5.navigationBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.navigationBar.clickUserIcon();
```
<a name="ui5.navigationBar.expectPageTitle"></a>

#### navigationBar.expectPageTitle(compareValue)
Expects the page title of the current page to be the compare value.

**Kind**: static method of [<code>navigationBar</code>](#ui5.navigationBar)  

| Param | Type | Description |
| --- | --- | --- |
| compareValue | <code>String</code> | The compare value. |

**Example**  
```js
await ui5.navigationBar.expectPageTitle("Home");
```
<a name="ui5.navigationBar.expectShellHeader"></a>

#### navigationBar.expectShellHeader([timeout])
Expects the shell header to be visible

**Kind**: static method of [<code>navigationBar</code>](#ui5.navigationBar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.navigationBar.expectShellHeader();
```
<a name="ui5.qunit"></a>

### ui5.qunit
**Kind**: static class of [<code>ui5</code>](#ui5)  
<a name="ui5.qunit.executeTests"></a>

#### qunit.executeTests(path)
Executes QUnit & OPA5 tests. Qmate acts like a runner.

**Kind**: static method of [<code>qunit</code>](#ui5.qunit)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Relative path to the QUnit/OPA5 html file. |

**Example**  
```js
await ui5.qunit.executeTests("path/to/qunit.html");
```
<a name="ui5.session"></a>

### ui5.session
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.session](#ui5.session)
    * [.login(username, [password], [verify], [timeout])](#ui5.session.login)
    * [.loginFiori(username, [password], [verify])](#ui5.session.loginFiori)
    * [.loginSapCloud(username, [password], [verify])](#ui5.session.loginSapCloud)
    * [.loginCustom(username, [password], usernameFieldSelector, passwordFieldSelector, logonButtonSelector, [verify])](#ui5.session.loginCustom)
    * [.loginCustomViaConfig(username, password, [verify])](#ui5.session.loginCustomViaConfig)
    * [.logout([verify])](#ui5.session.logout)
    * [.switchUser(username, [password], [authenticator], [wait])](#ui5.session.switchUser)
    * [.expectLogoutText()](#ui5.session.expectLogoutText)

<a name="ui5.session.login"></a>

#### session.login(username, [password], [verify], [timeout])
Login with specific username and password. This function works for both fiori and sap-cloud login.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>String</code> |  | The username. |
| [password] | <code>String</code> | <code>&quot;Welcome1!&quot;</code> | The password. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the function will check the shell header after logging in. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.session.login("PURCHASER");
```
**Example**  
```js
await ui5.session.login("JOHN_DOE", "abc123!", true);
```
<a name="ui5.session.loginFiori"></a>

#### session.loginFiori(username, [password], [verify])
Login with fioriForm and specific username and password.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>String</code> |  | The username. |
| [password] | <code>String</code> | <code>&quot;Welcome1!&quot;</code> | The password. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the function will check the shell header after logging in. |

**Example**  
```js
await ui5.session.loginFiori("john", "abc123!");
```
<a name="ui5.session.loginSapCloud"></a>

#### session.loginSapCloud(username, [password], [verify])
Login with sapCloud form and specific username and password.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>String</code> |  | The username. |
| [password] | <code>String</code> | <code>&quot;Welcome1!&quot;</code> | The password. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the function will check the shell header after logging in. |

**Example**  
```js
await ui5.session.loginSapCloud("john", "abc123!");
```
<a name="ui5.session.loginCustom"></a>

#### session.loginCustom(username, [password], usernameFieldSelector, passwordFieldSelector, logonButtonSelector, [verify])
Login with custom form and specific username and password.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>String</code> |  | The username. |
| [password] | <code>String</code> | <code>&quot;Welcome1!&quot;</code> | The password. |
| usernameFieldSelector | <code>String</code> |  | The CSS selector of the username field. |
| passwordFieldSelector | <code>String</code> |  | The CSS selector of the password field. |
| logonButtonSelector | <code>String</code> |  | The CSS selector of the login button. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the function will check the shell header after logging in. |

**Example**  
```js
await ui5.session.loginCustom("JOHN_DOE", "abc123!", "#username", #password, "#logon");
```
<a name="ui5.session.loginCustomViaConfig"></a>

#### session.loginCustomViaConfig(username, password, [verify])
Login with specific username and password. The selectors will be taken from the config.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>String</code> |  | The username. Can be specified in spec or config. If specified in both credentials will be taken from config. |
| password | <code>String</code> | <code>&quot;Welcome1!&quot;</code> | The password. Can be specified in spec or config. If specified in both credentials will be taken from config. |
| [verify] | <code>Boolean</code> | <code>false</code> | Specifies if the function will check the shell header after logging in. |

**Example**  
```js
// config - SAMPLE 1
    auth: {
      formType: 'plain',
      usernameFieldSelector: "#USERNAME_BLOCK input",
      passwordFieldSelector: "#PASSWORD_BLOCK input",
      logonButtonSelector: "#LOGIN_LINK"
    },
    // spec
    await ui5.session.loginCustomViaConfig("JOHN_DOE", "abc123!");


    // config - SAMPLE 2
    auth: {
      formType: "plain",
      username: "PURCH_EXT",
      password: "Welcome1!",
      usernameFieldSelector: "#USERNAME_BLOCK input",
      passwordFieldSelector: "#PASSWORD_BLOCK input",
      logonButtonSelector: "#LOGIN_LINK"
    },
    // spec
    await ui5.session.loginCustomViaConfig();
```
<a name="ui5.session.logout"></a>

#### session.logout([verify])
Logs the user out.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [verify] | <code>Boolean</code> | <code>&quot;true&quot;</code> | Specifies if the function will check the logout text after logging out. Set this to false if the system does not show the text after logging out. |

**Example**  
```js
await ui5.session.logout();
```
<a name="ui5.session.switchUser"></a>

#### session.switchUser(username, [password], [authenticator], [wait])
switches the user according to the passed username and password.

**Kind**: static method of [<code>session</code>](#ui5.session)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>String</code> |  | The username. |
| [password] | <code>String</code> | <code>&quot;Welcome1!&quot;</code> | The password. |
| [authenticator] | <code>Object</code> |  | The login form type. Set to null to use generic login. |
| [wait] | <code>Number</code> | <code>10000</code> | The waiting time between logout and login (ms). |

**Example**  
```js
await ui5.session.switchUser("PURCHASER");
```
**Example**  
```js
const authenticator = ui5.authenticators.fioriForm;
await ui5.session.switchUser("PURCHASER", "Welcome1!", authenticator, 30000);
```
<a name="ui5.session.expectLogoutText"></a>

#### session.expectLogoutText()
Expects the logout text after logout to be "You have been logged off.
This is essential for chaining scripts, so that no static browser sleep in the spec itself is required anymore.

**Kind**: static method of [<code>session</code>](#ui5.session)  
**Example**  
```js
await ui5.session.expectLogoutText();
```
<a name="ui5.userInteraction"></a>

### ui5.userInteraction
**Kind**: static class of [<code>ui5</code>](#ui5)  

* [.userInteraction](#ui5.userInteraction)
    * [.click(selector, [index], [timeout])](#ui5.userInteraction.click)
    * [.clickAndRetry(selector, [index], [timeout], [retries], [interval])](#ui5.userInteraction.clickAndRetry)
    * [.clickTab(selector, [index], [timeout])](#ui5.userInteraction.clickTab)
    * [.clickListItem(selector, [index], [timeout])](#ui5.userInteraction.clickListItem)
    * [.fill(selector, value, [index], [timeout])](#ui5.userInteraction.fill)
    * [.fillAndRetry(selector, value, [index], [timeout], [retries], [interval])](#ui5.userInteraction.fillAndRetry)
    * [.clear(selector, [index], [timeout])](#ui5.userInteraction.clear)
    * [.clearAndRetry(selector, [index], [timeout], [retries], [interval])](#ui5.userInteraction.clearAndRetry)
    * [.clearAndFill(selector, value, [index], [timeout])](#ui5.userInteraction.clearAndFill)
    * [.clearAndFillAndRetry(selector, value, [index], [timeout], [retries], [interval], [verify])](#ui5.userInteraction.clearAndFillAndRetry)
    * [.clearSmartFieldInput(selector, [index], [timeout])](#ui5.userInteraction.clearSmartFieldInput)
    * [.clearAndFillSmartFieldInput(selector, value, [index], [timeout])](#ui5.userInteraction.clearAndFillSmartFieldInput)
    * [.clearAndFillSmartFieldInputAndRetry(selector, value, [index], [timeout], [retries], [interval])](#ui5.userInteraction.clearAndFillSmartFieldInputAndRetry)
    * [.selectBox(selector, value, [index])](#ui5.userInteraction.selectBox)
    * [.selectComboBox(selector, value, [index])](#ui5.userInteraction.selectComboBox)
    * [.selectMultiComboBox(selector, values, [index])](#ui5.userInteraction.selectMultiComboBox)
    * [.clickSelectArrow(selector, [index])](#ui5.userInteraction.clickSelectArrow)
    * [.clickSelectArrowAndRetry(selector, [index], [retries], [interval])](#ui5.userInteraction.clickSelectArrowAndRetry)
    * [.scrollToElement(selector, [index], [alignment], [timeout])](#ui5.userInteraction.scrollToElement)
    * [.selectAll([selector], [index], [timeout])](#ui5.userInteraction.selectAll)
    * [.openF4Help(selector, [index], [timeout], useF4Key)](#ui5.userInteraction.openF4Help)
    * [.searchFor(selector, [index], [timeout], useEnter)](#ui5.userInteraction.searchFor)
    * [.resetSearch(selector, [index], [timeout])](#ui5.userInteraction.resetSearch)
    * [.doubleClick(selector, [index], [timeout])](#ui5.userInteraction.doubleClick)
    * [.rightClick(selector, [index], [timeout])](#ui5.userInteraction.rightClick)

<a name="ui5.userInteraction.click"></a>

#### userInteraction.click(selector, [index], [timeout])
Clicks on the element with the given selector.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.click(selector);
```
<a name="ui5.userInteraction.clickAndRetry"></a>

#### userInteraction.clickAndRetry(selector, [index], [timeout], [retries], [interval])
Clicks on the element with the given selector and retries the action in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.userInteraction.clickAndRetry(selector);
```
<a name="ui5.userInteraction.clickTab"></a>

#### userInteraction.clickTab(selector, [index], [timeout])
Clicks on the tab with the given selector and checks if the tab got selected successfully.
The function retries the click for maximal 3 times if the selection of the tab (blue underline) was not successful.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.clickTab(selector);
```
<a name="ui5.userInteraction.clickListItem"></a>

#### userInteraction.clickListItem(selector, [index], [timeout])
Clicks or opens the list item with the given selector (e.g. ColumnListItem, StandardListItem).
In some cases the default click function is not working correctly (clicks an element within the list item).
Therefore we recommend to use this function to open a specific list item.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.clickListItem(selector);
```
<a name="ui5.userInteraction.fill"></a>

#### userInteraction.fill(selector, value, [index], [timeout])
Fills the input field with the given selector.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to fill. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.fill(selector, "My Value");
```
<a name="ui5.userInteraction.fillAndRetry"></a>

#### userInteraction.fillAndRetry(selector, value, [index], [timeout], [retries], [interval])
Fills the input field with the given selector and retries the action in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to fill. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.userInteraction.fillAndRetry(selector, "My Value");
```
<a name="ui5.userInteraction.clear"></a>

#### userInteraction.clear(selector, [index], [timeout])
Clears the input with the given selector.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.clear(selector);
```
<a name="ui5.userInteraction.clearAndRetry"></a>

#### userInteraction.clearAndRetry(selector, [index], [timeout], [retries], [interval])
Clears the input with the given selector and retries the action in case of a failure

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.userInteraction.clearAndRetry(selector);
```
<a name="ui5.userInteraction.clearAndFill"></a>

#### userInteraction.clearAndFill(selector, value, [index], [timeout])
Clears the input field with the given selector and fills the given value.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to fill. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.clearAndFill(selector, "My Value");
```
<a name="ui5.userInteraction.clearAndFillAndRetry"></a>

#### userInteraction.clearAndFillAndRetry(selector, value, [index], [timeout], [retries], [interval], [verify])
Clears the input field with the given selector and fills the given value. Retries the action in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to fill. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |
| [verify] | <code>Boolean</code> | <code>true</code> | Specifies if the filled value should be verified. |

**Example**  
```js
await ui5.userInteraction.clearAndFillAndRetry(selector, "My Value");
```
<a name="ui5.userInteraction.clearSmartFieldInput"></a>

#### userInteraction.clearSmartFieldInput(selector, [index], [timeout])
Clears the smart filed with the given selector.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.clearSmartFieldInput(selector);
```
<a name="ui5.userInteraction.clearAndFillSmartFieldInput"></a>

#### userInteraction.clearAndFillSmartFieldInput(selector, value, [index], [timeout])
Clears the smart filed with the given selector and fills the given value.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to fill. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.clearAndFillSmartFieldInput(selector, "My Value");
```
<a name="ui5.userInteraction.clearAndFillSmartFieldInputAndRetry"></a>

#### userInteraction.clearAndFillSmartFieldInputAndRetry(selector, value, [index], [timeout], [retries], [interval])
Clears the smart filed with the given selector and fills the given value and retries the action in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to fill. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.userInteraction.clearAndFillSmartFieldInputAndRetry(selector, "My Value");
```
<a name="ui5.userInteraction.selectBox"></a>

#### userInteraction.selectBox(selector, value, [index])
Selects the passed value of the Select box.
Please note that the function will only work for the default select Box.
In special cases, please use the clickSelectArrow function.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to select. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |

**Example**  
```js
await ui5.userInteraction.selectBox(selector, "Germany");
```
<a name="ui5.userInteraction.selectComboBox"></a>

#### userInteraction.selectComboBox(selector, value, [index])
Selects the passed value from the ComboBox with the given selector.
Please note that the function will only work for the default ComboBox.
In special cases you need to use the 'clickSelectArrow' function.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| value | <code>String</code> |  | The value to select. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |

**Example**  
```js
await ui5.userInteraction.selectComboBox(selector, "Germany");
```
<a name="ui5.userInteraction.selectMultiComboBox"></a>

#### userInteraction.selectMultiComboBox(selector, values, [index])
Selects the passed values of the MultiComboBox with the given selector.
Please note that the function will only work for the default MultiComboBox.
In special cases, please use the clickSelectArrow function.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| values | <code>Array</code> |  | The values to select. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |

**Example**  
```js
await ui5.userInteraction.selectMultiComboBox(selector, ["Option 1", "Option 2"]);
```
<a name="ui5.userInteraction.clickSelectArrow"></a>

#### userInteraction.clickSelectArrow(selector, [index])
Clicks the arrow icon at the passed selector (select box).

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |

**Example**  
```js
await ui5.userInteraction.clickSelectArrow(selector);
```
<a name="ui5.userInteraction.clickSelectArrowAndRetry"></a>

#### userInteraction.clickSelectArrowAndRetry(selector, [index], [retries], [interval])
Clicks the arrow icon at the passed selector (select box), and retries in case it fails.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
await ui5.userInteraction.clickSelectArrowAndRetry(selector);
```
<a name="ui5.userInteraction.scrollToElement"></a>

#### userInteraction.scrollToElement(selector, [index], [alignment], [timeout])
Scrolls to the element with the given selector to get it into view.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [alignment] | <code>String</code> | <code>&quot;center&quot;</code> | Defines vertical/horizontal alignment. One of "start", "center", "end", or "nearest". Affects the alignToTop parameter of scrollIntoView function. By default, it takes 'up' |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.scrollToElement(selector);
```
**Example**  
```js
await ui5.userInteraction.scrollToElement(selector, 0, "start", 5000);
```
<a name="ui5.userInteraction.selectAll"></a>

#### userInteraction.selectAll([selector], [index], [timeout])
Performs "select all" (ctrl + a) at the element with the given selector.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [selector] | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector, in case there are more than one elements visible at the same time. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.selectAll(selector);
```
<a name="ui5.userInteraction.openF4Help"></a>

#### userInteraction.openF4Help(selector, [index], [timeout], useF4Key)
Opens the F4-help of the element with the given selector.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| useF4Key | <code>Boolean</code> |  | Specifies if the help is opened by pressing the F4-key or via the button. The default value is true (triggered by pressing the F4-key). Set "useF4Key" to false, to trigger the search by clicking the button. |

**Example**  
```js
await ui5.userInteraction.openF4Help(selector, 0, 30000, false);
```
<a name="ui5.userInteraction.searchFor"></a>

#### userInteraction.searchFor(selector, [index], [timeout], useEnter)
Searches for the passed value and executes the search.
In case that the search is already filled, it will reset the field first.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| useEnter | <code>Boolean</code> |  | Specifies if the search is triggered by pressing the Enter-key or via the search button. The default value is true (triggered by pressing the Enter-key). Set "useEnter" to false, to trigger the search by clicking the search button. |

**Example**  
```js
await ui5.userInteraction.searchFor(selector, "My Value", 0, 30000, false);
```
<a name="ui5.userInteraction.resetSearch"></a>

#### userInteraction.resetSearch(selector, [index], [timeout])
Resets the search field.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.resetSearch(selector);
```
<a name="ui5.userInteraction.doubleClick"></a>

#### userInteraction.doubleClick(selector, [index], [timeout])
Double Clicks on the passed element.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await ui5.userInteraction.doubleClick(selector);
```
<a name="ui5.userInteraction.rightClick"></a>

#### userInteraction.rightClick(selector, [index], [timeout])
Right Clicks on the passed element.

**Kind**: static method of [<code>userInteraction</code>](#ui5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the selector (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await ui5.userInteraction.rightClick(elem);
```
<a name="nonUi5"></a>

## nonUi5
Global namespace for non UI5 modules.

**Kind**: global constant  

* [nonUi5](#nonUi5)
    * [.assertion](#nonUi5.assertion)
        * [.expectAttributeToBe(elem, compareValue, [attribute])](#nonUi5.assertion.expectAttributeToBe)
        * [.expectAttributeToContain(elem, compareValue, [attribute])](#nonUi5.assertion.expectAttributeToContain)
        * [.expectValueToBe(elem, compareValue)](#nonUi5.assertion.expectValueToBe)
        * [.expectToBeVisible(element)](#nonUi5.assertion.expectToBeVisible)
        * [.expectToBeNotVisible(element, [timeout])](#nonUi5.assertion.expectToBeNotVisible)
    * [.element](#nonUi5.element)
        * [.waitForAll(selector, [timeout])](#nonUi5.element.waitForAll)
        * [.waitToBePresent(selector, [timeout])](#nonUi5.element.waitToBePresent)
        * [.waitToBeVisible(selector, [timeout])](#nonUi5.element.waitToBeVisible)
        * [.waitToBeClickable(selector, [timeout])](#nonUi5.element.waitToBeClickable)
        * [.getAllDisplayed(selector, [timeout])](#nonUi5.element.getAllDisplayed) ⇒ <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code>
        * [.getAll(selector, [timeout])](#nonUi5.element.getAll)
        * [.getByCss(selector, [index], [timeout])](#nonUi5.element.getByCss) ⇒ <code>Object</code>
        * [.getByCssContainingText(selector, [text], [index], [timeout])](#nonUi5.element.getByCssContainingText) ⇒ <code>Object</code>
        * [.getById(id, [timeout])](#nonUi5.element.getById) ⇒ <code>Object</code>
        * [.getByClass(elemClass, [index], [timeout])](#nonUi5.element.getByClass) ⇒ <code>Object</code>
        * [.getByName(name, [index], [timeout])](#nonUi5.element.getByName) ⇒ <code>Object</code>
        * [.getByXPath(xpath, [index], [timeout])](#nonUi5.element.getByXPath) ⇒ <code>Object</code>
        * [.getByChild(elementSelector, childSelector, [index], [timeout])](#nonUi5.element.getByChild) ⇒ <code>Object</code>
        * [.getByParent(elementSelector, parentSelector, [index], [timeout])](#nonUi5.element.getByParent) ⇒ <code>Object</code>
        * [.isVisible(element)](#nonUi5.element.isVisible) ⇒ <code>Boolean</code>
        * [.isPresent(elem)](#nonUi5.element.isPresent) ⇒ <code>Boolean</code>
        * [.isPresentByCss(css, [index], [timeout])](#nonUi5.element.isPresentByCss) ⇒ <code>boolean</code>
        * [.isPresentByXPath(xpath, [index], [timeout])](#nonUi5.element.isPresentByXPath) ⇒ <code>boolean</code>
        * [.getAttributeValue(elem, [attribute])](#nonUi5.element.getAttributeValue) ⇒ <code>String</code>
        * [.getValue(elem)](#nonUi5.element.getValue) ⇒ <code>String</code>
        * [.highlight(elem, [duration], [color])](#nonUi5.element.highlight)
        * [.switchToIframe(selector)](#nonUi5.element.switchToIframe)
        * [.switchToDefaultContent()](#nonUi5.element.switchToDefaultContent)
    * [.userInteraction](#nonUi5.userInteraction)
        * [.click(element, [timeout])](#nonUi5.userInteraction.click)
        * [.clickAndRetry(element, [timeout], [retries], [interval])](#nonUi5.userInteraction.clickAndRetry)
        * [.doubleClick(element, [timeout])](#nonUi5.userInteraction.doubleClick)
        * [.rightClick(element, [timeout])](#nonUi5.userInteraction.rightClick)
        * [.fill(element, value)](#nonUi5.userInteraction.fill)
        * [.fillAndRetry(element, value, [retries], [interval])](#nonUi5.userInteraction.fillAndRetry)
        * [.clear(element)](#nonUi5.userInteraction.clear)
        * [.clearAndRetry(element, [retries], [interval])](#nonUi5.userInteraction.clearAndRetry)
        * [.clearAndFill(element, value)](#nonUi5.userInteraction.clearAndFill)
        * [.clearAndFillAndRetry(element, value, [retries], [interval], [verify])](#nonUi5.userInteraction.clearAndFillAndRetry)
        * [.scrollToElement(elem, alignment)](#nonUi5.userInteraction.scrollToElement)
        * [.dragAndDrop(element, targetElem)](#nonUi5.userInteraction.dragAndDrop)
        * [.moveCursorAndClick(element)](#nonUi5.userInteraction.moveCursorAndClick)

<a name="nonUi5.assertion"></a>

### nonUi5.assertion
**Kind**: static class of [<code>nonUi5</code>](#nonUi5)  

* [.assertion](#nonUi5.assertion)
    * [.expectAttributeToBe(elem, compareValue, [attribute])](#nonUi5.assertion.expectAttributeToBe)
    * [.expectAttributeToContain(elem, compareValue, [attribute])](#nonUi5.assertion.expectAttributeToContain)
    * [.expectValueToBe(elem, compareValue)](#nonUi5.assertion.expectValueToBe)
    * [.expectToBeVisible(element)](#nonUi5.assertion.expectToBeVisible)
    * [.expectToBeNotVisible(element, [timeout])](#nonUi5.assertion.expectToBeNotVisible)

<a name="nonUi5.assertion.expectAttributeToBe"></a>

#### assertion.expectAttributeToBe(elem, compareValue, [attribute])
Expects the attributes value of the passed element to be the compare value.

**Kind**: static method of [<code>assertion</code>](#nonUi5.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| compareValue | <code>String</code> | The compare value. |
| [attribute] | <code>String</code> | The attribute to compare. If not passed, it will compare the inner HTML content of the element. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.assertion.expectAttributeToBe(elem, "Save");
```
**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.assertion.expectAttributeToBe(element, "Save", "title");
```
<a name="nonUi5.assertion.expectAttributeToContain"></a>

#### assertion.expectAttributeToContain(elem, compareValue, [attribute])
Expects the attributes value of the passed element to contain the compare value.

**Kind**: static method of [<code>assertion</code>](#nonUi5.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| compareValue | <code>String</code> | The compare value. |
| [attribute] | <code>String</code> | The attribute to compare. If not passed, it will compare the inner HTML content of the element. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.assertion.expectAttributeToContain(element, "Save", "title");
```
<a name="nonUi5.assertion.expectValueToBe"></a>

#### assertion.expectValueToBe(elem, compareValue)
Expects the attributes value of the passed element to be the compare value.

**Kind**: static method of [<code>assertion</code>](#nonUi5.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| compareValue | <code>String</code> | The compare value. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.assertion.expectValueToBe(elem, "Save");
```
<a name="nonUi5.assertion.expectToBeVisible"></a>

#### assertion.expectToBeVisible(element)
Expects that the element is visible to the user.

**Kind**: static method of [<code>assertion</code>](#nonUi5.assertion)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.assertion.expectToBeVisible(elem);
```
<a name="nonUi5.assertion.expectToBeNotVisible"></a>

#### assertion.expectToBeNotVisible(element, [timeout])
Expects that the element is not visible to the user.

**Kind**: static method of [<code>assertion</code>](#nonUi5.assertion)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). Recommendation is to lower the timeout since the element is not expected to show up. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.assertion.expectToBeNotVisible(elem, 5000);
```
<a name="nonUi5.element"></a>

### nonUi5.element
**Kind**: static class of [<code>nonUi5</code>](#nonUi5)  

* [.element](#nonUi5.element)
    * [.waitForAll(selector, [timeout])](#nonUi5.element.waitForAll)
    * [.waitToBePresent(selector, [timeout])](#nonUi5.element.waitToBePresent)
    * [.waitToBeVisible(selector, [timeout])](#nonUi5.element.waitToBeVisible)
    * [.waitToBeClickable(selector, [timeout])](#nonUi5.element.waitToBeClickable)
    * [.getAllDisplayed(selector, [timeout])](#nonUi5.element.getAllDisplayed) ⇒ <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code>
    * [.getAll(selector, [timeout])](#nonUi5.element.getAll)
    * [.getByCss(selector, [index], [timeout])](#nonUi5.element.getByCss) ⇒ <code>Object</code>
    * [.getByCssContainingText(selector, [text], [index], [timeout])](#nonUi5.element.getByCssContainingText) ⇒ <code>Object</code>
    * [.getById(id, [timeout])](#nonUi5.element.getById) ⇒ <code>Object</code>
    * [.getByClass(elemClass, [index], [timeout])](#nonUi5.element.getByClass) ⇒ <code>Object</code>
    * [.getByName(name, [index], [timeout])](#nonUi5.element.getByName) ⇒ <code>Object</code>
    * [.getByXPath(xpath, [index], [timeout])](#nonUi5.element.getByXPath) ⇒ <code>Object</code>
    * [.getByChild(elementSelector, childSelector, [index], [timeout])](#nonUi5.element.getByChild) ⇒ <code>Object</code>
    * [.getByParent(elementSelector, parentSelector, [index], [timeout])](#nonUi5.element.getByParent) ⇒ <code>Object</code>
    * [.isVisible(element)](#nonUi5.element.isVisible) ⇒ <code>Boolean</code>
    * [.isPresent(elem)](#nonUi5.element.isPresent) ⇒ <code>Boolean</code>
    * [.isPresentByCss(css, [index], [timeout])](#nonUi5.element.isPresentByCss) ⇒ <code>boolean</code>
    * [.isPresentByXPath(xpath, [index], [timeout])](#nonUi5.element.isPresentByXPath) ⇒ <code>boolean</code>
    * [.getAttributeValue(elem, [attribute])](#nonUi5.element.getAttributeValue) ⇒ <code>String</code>
    * [.getValue(elem)](#nonUi5.element.getValue) ⇒ <code>String</code>
    * [.highlight(elem, [duration], [color])](#nonUi5.element.highlight)
    * [.switchToIframe(selector)](#nonUi5.element.switchToIframe)
    * [.switchToDefaultContent()](#nonUi5.element.switchToDefaultContent)

<a name="nonUi5.element.waitForAll"></a>

#### element.waitForAll(selector, [timeout])
Waits until all elements with the given selector are rendered.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.waitForAll(".inputField");
```
<a name="nonUi5.element.waitToBePresent"></a>

#### element.waitToBePresent(selector, [timeout])
Waits until the element with the given selector is present.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.waitToBePresent(".input01");
```
**Example**  
```js
await nonUi5.element.waitToBePresent("#button12");
```
**Example**  
```js
await nonUi5.element.waitToBePresent("p:first-child");
```
<a name="nonUi5.element.waitToBeVisible"></a>

#### element.waitToBeVisible(selector, [timeout])
Waits until the element with the given selector is visible.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.waitToBeVisible(".input01");
```
**Example**  
```js
await nonUi5.element.waitToBeVisible("#button12");
```
**Example**  
```js
await nonUi5.element.waitToBeVisible("p:first-child");
```
<a name="nonUi5.element.waitToBeClickable"></a>

#### element.waitToBeClickable(selector, [timeout])
Waits until the element with the given selector is clickable.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.waitToBeClickable(".input01");
```
**Example**  
```js
await nonUi5.element.waitToBeClickable("#button12");
```
**Example**  
```js
await nonUi5.element.waitToBeClickable("p:first-child");
```
<a name="nonUi5.element.getAllDisplayed"></a>

#### element.getAllDisplayed(selector, [timeout]) ⇒ <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code>
Gets all visible elements with the passed selector.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>[ &#x27;Array&#x27; ].&lt;Object&gt;</code> - The array of elements.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.getAllDisplayed(".inputField");
```
<a name="nonUi5.element.getAll"></a>

#### element.getAll(selector, [timeout])
Returns all elements found by the given selector despite visible or not.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const hiddenElements = await nonUi5.element.getAll(".sapUiInvisibleText");
const isPresent = await nonUi5.element.isPresent(hiddenElements[0]);
await common.assertion.expectTrue(isPresent);
```
<a name="nonUi5.element.getByCss"></a>

#### element.getByCss(selector, [index], [timeout]) ⇒ <code>Object</code>
Gets the element with the given CSS selector.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByCss(".button01");
```
<a name="nonUi5.element.getByCssContainingText"></a>

#### element.getByCssContainingText(selector, [text], [index], [timeout]) ⇒ <code>Object</code>
Gets the element with the given CSS selector containing the given text value.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>Object</code> |  | The CSS selector describing the element. |
| [text] | <code>String</code> | <code>&quot;&quot;</code> | The containing text value of the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByCssContainingText(".input01", "Jack Jackson");
```
<a name="nonUi5.element.getById"></a>

#### element.getById(id, [timeout]) ⇒ <code>Object</code>
Gets the element with the given ID.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>String</code> |  | The id of the element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
```
<a name="nonUi5.element.getByClass"></a>

#### element.getByClass(elemClass, [index], [timeout]) ⇒ <code>Object</code>
Gets the element with the given class.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elemClass | <code>String</code> |  | The class describing the element |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByClass("button01");
const elem = await nonUi5.element.getByClass("sapMIBar sapMTB sapMTBNewFlex sapContrastPlus");
```
<a name="nonUi5.element.getByName"></a>

#### element.getByName(name, [index], [timeout]) ⇒ <code>Object</code>
Gets the element with the given name.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>String</code> |  | The name attribute of the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByName(".button01");
```
<a name="nonUi5.element.getByXPath"></a>

#### element.getByXPath(xpath, [index], [timeout]) ⇒ <code>Object</code>
Gets the element with the given XPath.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xpath | <code>String</code> |  | The XPath describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByXPath("//ul/li/a");
```
<a name="nonUi5.element.getByChild"></a>

#### element.getByChild(elementSelector, childSelector, [index], [timeout]) ⇒ <code>Object</code>
Gets an element by its selector and child selector. Can be used when multiple elements have the same properties.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elementSelector | <code>String</code> |  | The CSS selector describing the element. |
| childSelector | <code>String</code> |  | The CSS selector describing the child element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByChild(".form01", ".input01");
```
<a name="nonUi5.element.getByParent"></a>

#### element.getByParent(elementSelector, parentSelector, [index], [timeout]) ⇒ <code>Object</code>
Gets an element by its selector and parent selector. Can be used when multiple elements have the same properties.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Object</code> - The found element.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elementSelector | <code>String</code> |  | The CSS selector describing the element. |
| parentSelector | <code>String</code> |  | The CSS selector describing the parent element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getByParent(".form01", ".input01");
```
<a name="nonUi5.element.isVisible"></a>

#### element.isVisible(element) ⇒ <code>Boolean</code>
Returns a boolean if the element is visible to the user.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Boolean</code> - Returns true or false.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.element.isVisible(elem);
```
<a name="nonUi5.element.isPresent"></a>

#### element.isPresent(elem) ⇒ <code>Boolean</code>
Returns a boolean if the element is present at the DOM or not.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>Boolean</code> - Returns true or false.  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.element.isPresent(elem);
```
<a name="nonUi5.element.isPresentByCss"></a>

#### element.isPresentByCss(css, [index], [timeout]) ⇒ <code>boolean</code>
Returns a boolean if the element is present at the DOM or not.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>boolean</code> - Returns true or false.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| css | <code>String</code> |  | The CSS selector describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.isPresentByCss(".button01");
```
<a name="nonUi5.element.isPresentByXPath"></a>

#### element.isPresentByXPath(xpath, [index], [timeout]) ⇒ <code>boolean</code>
returns a boolean if the element is present at the DOM or not.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xpath | <code>String</code> |  | The XPath describing the element. |
| [index] | <code>Number</code> | <code>0</code> | The index of the element (in case there are more than one elements visible at the same time). |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
await nonUi5.element.isPresentByXPath(".//*[text()='Create']");
```
<a name="nonUi5.element.getAttributeValue"></a>

#### element.getAttributeValue(elem, [attribute]) ⇒ <code>String</code>
Returns the attributes value of the passed element.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>String</code> - The attributes value of the element.  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |
| [attribute] | <code>String</code> | The attribute of the element. Leave empty to return the inner HTML value of the element. |

**Example**  
```js
const elem = await nonUi5.element.getById("elem01");
const text = await nonUi5.element.getAttributeValue(elem, "text");
```
**Example**  
```js
const elem = await nonUi5.element.getById("elem02");
const innerHTML = await nonUi5.element.getAttributeValue(elem);
```
<a name="nonUi5.element.getValue"></a>

#### element.getValue(elem) ⇒ <code>String</code>
Returns the value of the passed element.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Returns**: <code>String</code> - The value of the element.  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | The element. |

**Example**  
```js
const elem = await nonUi5.element.getById("elem02");
const innerHTML = await nonUi5.element.getValue(elem);
```
<a name="nonUi5.element.highlight"></a>

#### element.highlight(elem, [duration], [color])
Highlights the passed element.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elem | <code>Object</code> |  | The element. |
| [duration] | <code>Integer</code> | <code>2000</code> | The duration of the highlighting (ms). |
| [color] | <code>String</code> | <code>&quot;red&quot;</code> | The color of the highlighting (CSS value). |

**Example**  
```js
const elem = await nonUi5.element.getById("text01");
await nonUi5.element.highlight(elem);
```
**Example**  
```js
const elem = await nonUi5.element.getById("text01");
await nonUi5.element.highlight(elem, 3000, "green");
```
<a name="nonUi5.element.switchToIframe"></a>

#### element.switchToIframe(selector)
Switches to the passed iframe.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> | The CSS selector describing the iframe element. |

**Example**  
```js
await nonUi5.element.switchToIframe("iframe[id='frame01']");
```
<a name="nonUi5.element.switchToDefaultContent"></a>

#### element.switchToDefaultContent()
Switches to the default content of the HTML page.

**Kind**: static method of [<code>element</code>](#nonUi5.element)  
**Example**  
```js
await nonUi5.element.switchToDefaultContent();
```
<a name="nonUi5.userInteraction"></a>

### nonUi5.userInteraction
**Kind**: static class of [<code>nonUi5</code>](#nonUi5)  

* [.userInteraction](#nonUi5.userInteraction)
    * [.click(element, [timeout])](#nonUi5.userInteraction.click)
    * [.clickAndRetry(element, [timeout], [retries], [interval])](#nonUi5.userInteraction.clickAndRetry)
    * [.doubleClick(element, [timeout])](#nonUi5.userInteraction.doubleClick)
    * [.rightClick(element, [timeout])](#nonUi5.userInteraction.rightClick)
    * [.fill(element, value)](#nonUi5.userInteraction.fill)
    * [.fillAndRetry(element, value, [retries], [interval])](#nonUi5.userInteraction.fillAndRetry)
    * [.clear(element)](#nonUi5.userInteraction.clear)
    * [.clearAndRetry(element, [retries], [interval])](#nonUi5.userInteraction.clearAndRetry)
    * [.clearAndFill(element, value)](#nonUi5.userInteraction.clearAndFill)
    * [.clearAndFillAndRetry(element, value, [retries], [interval], [verify])](#nonUi5.userInteraction.clearAndFillAndRetry)
    * [.scrollToElement(elem, alignment)](#nonUi5.userInteraction.scrollToElement)
    * [.dragAndDrop(element, targetElem)](#nonUi5.userInteraction.dragAndDrop)
    * [.moveCursorAndClick(element)](#nonUi5.userInteraction.moveCursorAndClick)

<a name="nonUi5.userInteraction.click"></a>

#### userInteraction.click(element, [timeout])
Clicks on the passed element.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.userInteraction.click(elem);
```
<a name="nonUi5.userInteraction.clickAndRetry"></a>

#### userInteraction.clickAndRetry(element, [timeout], [retries], [interval])
Clicks on the passed element, retries in case it fails.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.userInteraction.clickAndRetry(elem);
```
<a name="nonUi5.userInteraction.doubleClick"></a>

#### userInteraction.doubleClick(element, [timeout])
Double Clicks on the passed element.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.userInteraction.doubleClick(elem);
```
<a name="nonUi5.userInteraction.rightClick"></a>

#### userInteraction.rightClick(element, [timeout])
Right Clicks on the passed element.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| [timeout] | <code>Number</code> | <code>30000</code> | The timeout to wait (ms). |

**Example**  
```js
const elem = await nonUi5.element.getById("button01");
await nonUi5.userInteraction.rightClick(elem);
```
<a name="nonUi5.userInteraction.fill"></a>

#### userInteraction.fill(element, value)
Fills the given value into the passed input.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element. |
| value | <code>String</code> | The value to be filled. |

**Example**  
```js
const elem = await nonUi5.element.getById("input01");
await nonUi5.userInteraction.fill(elem, "Service 01");
```
<a name="nonUi5.userInteraction.fillAndRetry"></a>

#### userInteraction.fillAndRetry(element, value, [retries], [interval])
Fills the given value into the passed input, retries in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| value | <code>String</code> |  | The value to be filled. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
const elem = await nonUi5.element.getById("input01");
await nonUi5.userInteraction.fillAndRetry(elem, "Service 01");
```
<a name="nonUi5.userInteraction.clear"></a>

#### userInteraction.clear(element)
Clears the passed input element.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element. |

**Example**  
```js
const elem = await nonUi5.element.getById("input01");
await nonUi5.userInteraction.clear(elem);
```
<a name="nonUi5.userInteraction.clearAndRetry"></a>

#### userInteraction.clearAndRetry(element, [retries], [interval])
Clears the passed input element, retries in case of a failure.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |

**Example**  
```js
const elem = await nonUi5.element.getById("input01", 10000);
await nonUi5.userInteraction.clearAndRetry(elem);
```
<a name="nonUi5.userInteraction.clearAndFill"></a>

#### userInteraction.clearAndFill(element, value)
Clears and fills the passed input element.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element. |
| value | <code>String</code> | The value to be filled in. |

**Example**  
```js
const elem = await nonUi5.element.getById("input01");
await nonUi5.userInteraction.clearAndFill(elem, "Service 01");
```
<a name="nonUi5.userInteraction.clearAndFillAndRetry"></a>

#### userInteraction.clearAndFillAndRetry(element, value, [retries], [interval], [verify])
Clears and fills the passed input, retries in case it fails.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Object</code> |  | The element. |
| value | <code>String</code> |  | The value to be filled in. |
| [retries] | <code>Number</code> | <code>3</code> | The number of retries, can be set in config for all functions under params stepsRetries. |
| [interval] | <code>Number</code> | <code>5000</code> | The delay between the retries (ms). Can be set in config for all functions under params.stepRetriesIntervals. |
| [verify] | <code>Boolean</code> | <code>true</code> | Specifies if the filled value should be verified. |

**Example**  
```js
const elem = await nonUi5.element.getById("input01");
await nonUi5.userInteraction.clearAndFillAndRetry(elem, "Service 01");
```
<a name="nonUi5.userInteraction.scrollToElement"></a>

#### userInteraction.scrollToElement(elem, alignment)
Scrolls to the passed element to get it into view.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elem | <code>Object</code> |  | The element. |
| alignment | <code>String</code> | <code>&quot;center&quot;</code> | Defines vertical/horizontal alignment. One of "start", "center", "end", or "nearest". Affects the alignToTop parameter of scrollIntoView function. By default, it takes 'up' |

**Example**  
```js
const elem = await nonUi5.userInteraction.getElementById("footer01");
await nonUi5.userInteraction.scrollToElement(elem);
```
<a name="nonUi5.userInteraction.dragAndDrop"></a>

#### userInteraction.dragAndDrop(element, targetElem)
Drags and drops the given element to the given target element.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element to drag. |
| targetElem | <code>Object</code> | The target element to drop the element. |

**Example**  
```js
const elem = await nonUi5.element.getById("drag01");
```
**Example**  
```js
const targetElem = await nonUi5.element.getById("drop02");
await nonUi5.userInteraction.dragAndDrop(elem, targetElem);
```
<a name="nonUi5.userInteraction.moveCursorAndClick"></a>

#### userInteraction.moveCursorAndClick(element)
Moves the cursor to the target element and clicks on it. Can be used for charts.

**Kind**: static method of [<code>userInteraction</code>](#nonUi5.userInteraction)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | The element to be clicked. |

**Example**  
```js
const elem = await nonUi5.element.getById("chartPartToClick");
await nonUi5.userInteraction.moveCursorAndClick(elem);
```
<a name="service"></a>

## service
Global namespace for service modules.

**Kind**: global constant  

* [service](#service)
    * [.odata](#service.odata)
        * [.init(url, username, password)](#service.odata.init) ⇒ <code>Object</code>
        * [.get(service, entitySet, keys)](#service.odata.get)
        * [.getEntitySet(service, entitySet)](#service.odata.getEntitySet)
        * [.isFeatureToggleActivated(service, featureName)](#service.odata.isFeatureToggleActivated)
        * [.post(service, entitySet, payload)](#service.odata.post)
        * [.merge(service, entitySet, payload)](#service.odata.merge)
        * [.delete(service, entitySet, options)](#service.odata.delete)
        * [.callFunctionImport(service, functionImportName, options)](#service.odata.callFunctionImport)
        * [.getOutputManagementPdfStream(outputConf, url)](#service.odata.getOutputManagementPdfStream)
        * [.readPdfFromDirectUrl(url)](#service.odata.readPdfFromDirectUrl)

<a name="service.odata"></a>

### service.odata
**Kind**: static class of [<code>service</code>](#service)  

* [.odata](#service.odata)
    * [.init(url, username, password)](#service.odata.init) ⇒ <code>Object</code>
    * [.get(service, entitySet, keys)](#service.odata.get)
    * [.getEntitySet(service, entitySet)](#service.odata.getEntitySet)
    * [.isFeatureToggleActivated(service, featureName)](#service.odata.isFeatureToggleActivated)
    * [.post(service, entitySet, payload)](#service.odata.post)
    * [.merge(service, entitySet, payload)](#service.odata.merge)
    * [.delete(service, entitySet, options)](#service.odata.delete)
    * [.callFunctionImport(service, functionImportName, options)](#service.odata.callFunctionImport)
    * [.getOutputManagementPdfStream(outputConf, url)](#service.odata.getOutputManagementPdfStream)
    * [.readPdfFromDirectUrl(url)](#service.odata.readPdfFromDirectUrl)

<a name="service.odata.init"></a>

#### odata.init(url, username, password) ⇒ <code>Object</code>
Initializes The service to work with.
XCSRF-Token will be automatically fetched and stored in the service instance.
Cookies will also automatically assembled and stored in the service instance.

**Kind**: static method of [<code>odata</code>](#service.odata)  
**Returns**: <code>Object</code> - The initialized service object.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>url</code> | The base url of the service |
| username | <code>username</code> | The username. |
| password | <code>password</code> | The password of the username. |

**Example**  
```js
const url = "https://hbr-715.wdf.sap.corp/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/";
srv = await service.odata.init(url, user, password);
```
<a name="service.odata.get"></a>

#### odata.get(service, entitySet, keys)
makes a GET request.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| entitySet | <code>entitySet</code> | The entitySet you want to GET from. |
| keys | <code>keys</code> | The required keys for the GET-request. |

**Example**  
```js
const url = "https://qs9-715.wdf.sap.corp/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/";
srv = await service.odata.init(url, user, password);
```
<a name="service.odata.getEntitySet"></a>

#### odata.getEntitySet(service, entitySet)
GET's the EntitySet collection.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| entitySet | <code>entitySet</code> | The entitySet you want to GET from. |

**Example**  
```js
const url = "https://qs9-715.wdf.sap.corp/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/";
srv = await service.odata.init(url, user, password);
let res = await service.odata.getEntitySet(service, "A_PurchaseOrder");
```
<a name="service.odata.isFeatureToggleActivated"></a>

#### odata.isFeatureToggleActivated(service, featureName)
checks if a feature toggle is switched on or off

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| featureName | <code>featureName</code> | The name of the feature you want know the status of. |

**Example**  
```js
const url = browser.params.systemUrl + "/sap/opu/odata/SAP/CA_FM_FEATURE_TOGGLE_STATUS_SRV/";
service = await service.odata.init(url, user, password);
let isFeatureActive = await service.odata.isFeatureToggleActivated(service, "MM_PUR_PO_BATCHES_IN_MANAGE_PO");
```
<a name="service.odata.post"></a>

#### odata.post(service, entitySet, payload)
makes a POST request.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| entitySet | <code>entitySet</code> | The entitySet you want to POST against. |
| payload | <code>payload</code> | The payload for the POST-request. |

**Example**  
```js
let keys = {
             "PurchaseOrder": "4500007108",
             "DraftUUID": "00000000-0000-0000-0000-000000000000",
             "IsActiveEntity": "true"
         };
let res = await service.odata.get(service, "A_PurchaseOrder", keys);
```
<a name="service.odata.merge"></a>

#### odata.merge(service, entitySet, payload)
makes a MERGE request.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| entitySet | <code>entitySet</code> | The entitySet you want to MERGE in. |
| payload | <code>payload</code> | The payload for the MERGE-request. |

**Example**  
```js
let res = await service.odata.merge(service, "A_PurchaseOrderScheduleLine", {
             "PurchasingDocument": "4500007108",
             "PurchasingDocumentItem": "10",
             "ScheduleLine": "1",
             "ScheduleLineDeliveryDate": new Date()
         };
let res = await service.odata.get(service, "A_PurchaseOrder", keys);
```
<a name="service.odata.delete"></a>

#### odata.delete(service, entitySet, options)
makes a DELETE request.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| entitySet | <code>entitySet</code> | The entitySet you want to DELETE. |
| options | <code>options</code> | The options for the DELETE-request. |

**Example**  
```js
let options = {
                "PurchaseOrder": "",
                "DraftUUID": draftUUID,
                "IsActiveEntity": false
              };
              await service.odata.delete(service, "C_PurchaseOrderTP", options);
```
<a name="service.odata.callFunctionImport"></a>

#### odata.callFunctionImport(service, functionImportName, options)
makes a function import request on an OData service.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| service | [<code>service</code>](#service) | Instance of the service |
| functionImportName | <code>entitySet</code> | Name of Function Import |
| options | <code>options</code> | parameters for function import |

**Example**  
```js
const options = {
    CentralRequestForQuotation : "7500000026",
    Supplier : "100006"
  };
  const res = await service.odata.callFunctionImport(service, functionImportName, options);
```
<a name="service.odata.getOutputManagementPdfStream"></a>

#### odata.getOutputManagementPdfStream(outputConf, url)
returns a stream of output management pdf file.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| outputConf | <code>outputConf</code> | Configuration for the output management pdf. |
| url | <code>url</code> | system url |
|  | <code>username</code> | username for login |
|  | <code>password</code> | password for login |

**Example**  
```js
const outputConf = {
                ApplObjectType: "REQUEST_FOR_QUOTATION",
                ApplObjectId: "7000002653",
                ItemId: "1"
              };
              const pdfStream = await service.odata.getOutputManagementPdfStream(outputConf, url, user, password);
```
<a name="service.odata.readPdfFromDirectUrl"></a>

#### odata.readPdfFromDirectUrl(url)
returns a stream of pdf file which is part of attachment.

**Kind**: static method of [<code>odata</code>](#service.odata)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>url</code> | system url |
|  | <code>username</code> | [OPTIONAL] username for login |
|  | <code>password</code> | [OPTIONAL] password for login |

**Example**  
```js
const url = "https://domain.com/getPdfFile";
      const pdfStream = await service.odata.readPdfFromDirectUrl(url, "username", "Password");
```