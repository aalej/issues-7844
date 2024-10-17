# Repro for issue 7844

## Versions

firebase-tools: v13.22.1<br>
node: v18.19.1<br>

## Steps to reproduce

1. Run `cd functions`
2. Run `npm i`
3. Run `npm run build`
4. Run `firebase emulators:start --project demo-project`
   - Outputs

```
$ firebase emulators:start --project demo-project
i  emulators: Starting emulators: functions, extensions
i  emulators: Detected demo project ID "demo-project", emulated services will use a demo configuration and attempts to access non-emulated services for this project will fail.
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "/Users/<PATH>/issues/7844/functions" for Cloud Functions...
✔  functions: Using node@18 from host.
Serving at port 8692

✔  functions: Loaded functions definitions from source: test.
✔  functions[us-central1-test]: http function initialized (http://127.0.0.1:5001/demo-project/us-central1/test).

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌────────────┬────────────────┬──────────────────────────────────┐
│ Emulator   │ Host:Port      │ View in Emulator UI              │
├────────────┼────────────────┼──────────────────────────────────┤
│ Functions  │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions  │
├────────────┼────────────────┼──────────────────────────────────┤
│ Extensions │ 127.0.0.1:5001 │ http://127.0.0.1:4000/extensions │
└────────────┴────────────────┴──────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500
┌─────────────────────────┬───────────────┬─────────────────────┐
│ Extension Instance Name │ Extension Ref │ View in Emulator UI │
└─────────────────────────┴───────────────┴─────────────────────┘
Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.
```

5. Open a new terminal, run `cd test-app`
6. Run `npm i`
7. Run `npm run build`
8. Run `node lib/index.js`
   - Outputs:

```
$ node lib/index.js
{ message: 'Hello from Firebase!' }
```
