# After 3 years without Go

Notes about Go itself:

-   Go (often referred to as Golang) is a statically typed, compiled programming language designed at Google.
-   Has first class functions (so it feels like JavaScript).
-   Types, Structs, Interfaces, GoRoutines y Channels.
-   You can compile to any other platform from your current development environment.
-   Extensible with cgo <https://golang.org/cmd/cgo/>
-   Since it has first class functions and other type abstractions,
    you can follow some funcitonal programming principles with it: <https://awalterschulze.github.io/blog/post/monads-for-goprogrammers/>

## What's new in Go since 2016?

There are two things that stress me a bit about these past years since the last time I used Go,

1.  New syntax since 2016.
2.  New proposals.
3.  What packages are being used?
4.  Best practices
    1.  I remember that using interfaces was weird sometimes.
        1.  I'm guessing it will be easier in my brain because I'm
            more familiar with higher order functions (in strict
            functional programming languages), where in order to pass
            the function around you don't need to know what the
            function is about but the expected properties. Something
            like that.
    2.  I remember that it was tricky to use select with channels? Not
        hard, but hard to make right on a large project.
        1.  <https://gobyexample.com/non-blocking-channel-operations>

### 1\. New syntax since 2016

Nothing new to the language itself! Woo.

IMPORTANT: go modules are HERE: <https://roberto.selbach.ca/intro-to-go-modules/>

### 2\. New pending proposals

This is about feature requests that are pending for approval. All the
links below are highlights of the content available in this list of
proposals: <https://go.googlesource.com/proposal/+/master/design/> .

-   [Contracts --- Draft Design](https://go.googlesource.com/proposal/+/master/design/go2draft-contracts.md)
    -   [Will contracts replace interfaces? / Francesc Campoy](https://www.youtube.com/watch?v=E75b9kuyRKw)
-   [Proposal: Localization support in Go](https://go.googlesource.com/proposal/+/master/design/12750-localization.md)

### 3\. Common/recommended packages

-   Gorilla WebSockets
-   [buffalo - Rapid Web Development w/ Go](https://github.com/gobuffalo/buffalo)
-   <https://github.com/juju/errors>
-   <https://github.com/aws/aws-sdk-go>
-   <https://github.com/sirupsen/logrus>
-   <https://github.com/stretchr/testify>
-   <https://github.com/weaveworks/flux>
-   <https://github.com/weaveworks-experiments/flux-classic>
-   <https://github.com/binci/binci> Containerized development environment

Sources:

-   [Will Node.js forever be the sluggish Golang?](https://levelup.gitconnected.com/will-node-js-forever-be-the-sluggish-golang-f632130e5c7a)
-   [Top 10 Most Imported Golang Packages --- Some Insights](https://medium.com/@_orcaman/most-imported-golang-packages-some-insights-fb12915a07)
-   [Reddit Golang](https://old.reddit.com/r/golang/)

Some random but interesting GitHub Go Repos I found while doing this
research:

-   [A Kubernetes controller to export LoadBalancer Services to Consul](https://github.com/github/kube-service-exporter)
-   [freno: cooperative, highly available throttler service](https://github.com/github/freno)
-   [GitHub's ops focused Elasticsearch library](https://github.com/github/vulcanizer)
-   [A command-line tool that makes git easier to use with GitHub](https://github.com/github/hub)
-   [GitHub's Online Schema Migrations for MySQL](https://github.com/github/gh-ost)
-   [Vagga is a containerization tool without daemons](https://github.com/tailhook/vagga)

### 4\. Best practices

General recommendations:

-   Interfaces are to separate the definition from the implementation
    (Thanks to Stefan for this phrase, so smart!!!).

From Sources:

-   [Twelve Go Best Practices - By Francesc Campoy Flores (2013)](https://talks.golang.org/2013/bestpractices.slide#1)
    -   Use go fmt
    -   Avoid nesting by handling errors first
    -   Avoid Repetition: Deploy one-off utility types for simpler code
    -   `switch v.(type) { case string:`
    -   `switch x := v.(type) { case string:`
    -   Writing everything or nothing <https://talks.golang.org/2013/bestpractices.slide#9>
-   [Go best practices, six years in - By Peter Bourgon (2016)](https://peter.bourgon.org/go-best-practices-2016/)
    -   Put $GOPATH/bin in your $PATH, so installed binaries are easily accessible.
    -   Put library code under a pkg/ subdirectory. Put binaries under a cmd/ subdirectory.
    -   Always use fully-qualified import paths. Never use relative imports.
    -   Defer to Andrew Gerrand's naming conventions: <https://talks.golang.org/2014/names.slide#1>
    -   Only func main has the right to decide which flags are available to the user.
    -   Use struct literal initialization to avoid invalid intermediate state.
    -   Avoid nil checks via default no-op implementations. Make the zero value useful, especially in config objects. This means that a nil input should result in a valid state/response.
    -   Make dependencies explicit!
    -   Loggers are dependencies, just like references to other components, database handles, command line flags, etc.
    -   Use many small interfaces to model dependencies.
    -   Tests only need to test the thing being tested.
    -   Use a top tool to vendor dependencies for your binary.
    -   Libraries should never vendor their dependencies.
    -   Prefer go install to go build.
-   [go-best-practices - concurrency - By George Mac (2018)](https://github.com/codeship/go-best-practices/tree/master/concurrency)
    -   It is really hard to do it correctly. Try your best to not use it at all.
    -   It is really hard to test. Try your best to not use it at all.
    -   Test concurrent interaction with the things you write, run those tests with the race detector.
    -   Don't let a channel consumer say when it is done.
    -   Ensure consumers can only consume. `recvOnly <-chan Thing` are your friends.
    -   Track completion of goroutines. `sync.WaitGroup` is your friend.
    -   Close only when producing routines can be verified as no longer able to send on the channel being closed.
-   Project Layout:
    -   <https://github.com/golang-standards/project-layout>
    -   Directories You Shouldn't Have:
        -   /src.
-   <https://github.com/tmrts/go-patterns>
    -   Observer Pattern: <https://github.com/tmrts/go-patterns/blob/master/behavioral/observer.md>
    -   Parallelism: <https://github.com/tmrts/go-patterns/blob/master/concurrency/parallelism.go>
    -   Bounded Parallelism: <https://github.com/tmrts/go-patterns/blob/master/concurrency/bounded_parallelism.go>
    -   Builder pattern separates the construction of a complex object from its representation so that the same construction process can create different representations <https://github.com/tmrts/go-patterns/blob/master/creational/builder.md>
    -   Publish & Subscribe <https://github.com/tmrts/go-patterns/blob/master/messaging/publish_subscribe.md>
    -   [Fan_in](https://github.com/tmrts/go-patterns/blob/master/messaging/fan_in.md), [fan_out](https://github.com/tmrts/go-patterns/blob/master/messaging/fan_out.md)
    -   Profiling: <https://github.com/tmrts/go-patterns/blob/master/profiling/timing.md>
    -   Circuit breaker (retries up until threshold): <https://github.com/tmrts/go-patterns/blob/master/stability/circuit-breaker.md>
    -   Proxy pattern (an object whose methods intercept all calls to another object's methods): <https://github.com/tmrts/go-patterns/blob/master/structural/proxy.md>
    -   Decorator pattern (wraps around a function and allows doing stuff before and after): <https://github.com/tmrts/go-patterns/blob/master/structural/decorator.md>
    -   Semaphore pattern, mutual exclusion of limited resources: <https://github.com/tmrts/go-patterns/blob/master/synchronization/semaphore.md>
-   <https://www.godesignpatterns.com/>
    -   [Exiting Multiple Goroutines Simultaneously](https://www.godesignpatterns.com/2014/04/exiting-multiple-goroutines-simultaneously.html)
    -   [new() vs make()](https://www.godesignpatterns.com/2014/04/new-vs-make.html)


-------------

## [workflow-parser](https://github.com/actions/workflow-parser)

Non-code resources:

-   [An open source parser for GitHub Actions](https://githubengineering.com/an-open-source-parser-for-github-actions/).
-   This repo deals with [main.workflow files](https://developer.github.com/actions/creating-workflows/creating-a-new-workflow/).
-   .workflow file syntax: <https://github.com/actions/workflow-parser/blob/master/language.md>

Code resources:

-   Dependencies:
    -   [HashiCorp Configuration Language](https://github.com/hashicorp/hcl)
    -   [Simple and fast graph library](https://github.com/soniakeys/graph)
    -   [Testify - Thou Shalt Write Tests](https://github.com/stretchr/testify)
-   PRs:
    -   [Enable go modules support #30](https://github.com/actions/workflow-parser/pull/30)
        -   Currently in go1.11 - 1.12 it needs to be enabled if being
            run from within the $GOPATH. Also in go1.13 they plan on
            deprecating the $GOPATH and enabling modules by default.
    -   [Enable go modules support #30](https://github.com/actions/workflow-parser/pull/30)
        -   WIP for enabling Go modules to manage go dependencies
            instead of dep. Go modules are planned to be the standard
            method for managing go dependencies in go1.13+.
-   File structure:
    -   They have a CMD utility: [workflow-parser/cmd/main.go](https://github.com/actions/workflow-parser/blob/master/cmd/main.go)
    -   Models: [master/model](https://github.com/actions/workflow-parser/blob/master/model/)
        -   [Nice uses test](https://github.com/actions/workflow-parser/blob/master/model/uses_test.go)
    -   Parser:
        -   [Really clean way of catching circular dependencies](https://github.com/actions/workflow-parser/blob/master/parser/parser.go#L134-L138).

Other Notes:
-   They use Gopkg.

Questions:

-   [Why do they limit the number of secrets?](https://github.com/actions/workflow-parser/blob/master/parser/parser.go#L152)
    -   I made an issue: <https://github.com/actions/workflow-parser/issues/31>
-   Check what's up with the "needs": (look for dependencies here and in the language): <https://github.com/actions/workflow-parser/blob/master/parser/parser.go#L113>
    -   "The "needs" keyword identifies one or more actions that must complete successfully before this action can begin" (from the [language](https://github.com/actions/workflow-parser/blob/master/language.md) docs).

My contributions:

-   Comment on their tiny JS parser: <https://github.com/actions/workflow-parser/pull/10/files#r261839616>
-   I removed it since the start and end are necessary.

## [hcl](https://github.com/actions/hcl)

Non-code resources:
-   Why?
    -   Simple like JSON, but with comments, and less verbose to write.
    -   HCL as a specialized language for our tools, and JSON as the interoperability layer.

Code resources:

-   Dependencies:
    -   Uses [go-spew](https://github.com/davecgh/go-spew), which implements a deep pretty printer for Go data structures to aid in debugging.
-   PRs:
    -   [Set up CI](https://github.com/actions/hcl/pull/4/).
        -   They use actions! .github/main.workflow
    -   [syscall.EACCES -> syscall.ENOENT](https://github.com/actions/hcl/pull/4/files#diff-09dd0513044cc7be440349ec0b7d9403L200)
        -   The other PRs customize the engine a bit, to make it less versatile (just a bit), to match .workflow requirements.
-   File structure:
    -   Top level stuff is at the root.
    -   There are folders that isolate some scopes of some of the things that are handled, like the hcl parser/utilities itself and the json utilities.

Other Notes:

-   They use go modules.
-   The actions org has several examples of axtions that use NPM, Zeit, etc.

## Go practice project

I'll make a GitHub application that sends messages from our activity
at [BerserkTech](https://github.com/berserktech/) to our Telegram.

Links:
-   Probot zeit now deployment: <https://probot.github.io/docs/deployment/#now>
-   Zeit by example: Go <https://zeit.co/examples/go>
-   Go github webhooks: <https://github.com/go-playground/webhooks/blob/v5/README.md>
-   Golang bindings for the Telegram Bot API <https://github.com/go-telegram-bot-api/telegram-bot-api>
-   <https://github.com/berserktech/telebot/pull/1>
