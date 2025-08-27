---
mode: agent
model : GPT-4.1
tools: ['extensions', 'codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'terminalSelection', 'terminalLastCommand', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'runTests', 'runCommands', 'editFiles', 'runNotebooks', 'search', 'new', 'runTasks', 'browser_click', 'browser_close', 'browser_console_messages', 'browser_drag', 'browser_evaluate', 'browser_file_upload', 'browser_handle_dialog', 'browser_hover', 'browser_install', 'browser_navigate', 'browser_navigate_back', 'browser_press_key', 'browser_resize', 'browser_select_option', 'browser_snapshot', 'browser_tab_close', 'browser_tab_list', 'browser_tab_new', 'browser_tab_select', 'browser_take_screenshot', 'browser_type', 'browser_wait_for']
description: 'Generate a new playwright test spec with interactive input gathering'
---
# AI Agent Instructions for `learn-playwright-mcp`
1. Get the test details:
   - please ask the user for the page URL to test.
   - please ask the user for the page object model name.
   - please ask the user for the specific test case details.
2. Generate the test spec:
   - Create a new file in the `tests/spec/` directory with a `.spec.ts` extension.
   - Use the provided details to scaffold a basic Playwright test.
   - Please create a page file in the `tests/page/` directory with a `.page.ts` extension if needed. 