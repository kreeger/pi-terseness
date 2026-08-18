# Pi Terseness

A [Pi](https://pi.dev) extension that makes agent responses concise by default. It prepends terse-response guidance to Pi's system prompt at the start of each session. It's based on the popular "caveman" skill, but modified to add in articles and more for readability.

## Install

Install directly from this repository:

```sh
pi install https://github.com/kreeger/pi-terseness.git
```

For a project-local installation, add `-l`:

```sh
pi install -l https://github.com/kreeger/pi-terseness.git
```

Restart Pi after installation. Use `pi config` to enable or disable the extension, or `pi remove https://github.com/kreeger/pi-terseness.git` to uninstall it.

## Behavior

The extension applies the following response style to every agent run in a session:

- Preserve technical substance; remove filler and pleasantries.
- Prefer short, direct words and common technical abbreviations.
- Use compact phrasing and arrows for causal relationships.
- Keep the system-prompt override active across turns so the rule is not lost after Pi resets its prompt.

It has no configuration, commands, tools, network access, or runtime dependencies beyond Pi.

## Development

This is a source-only Pi package: Pi loads TypeScript extensions directly. The package manifest explicitly exposes `extensions/` as its Pi resource.

Validate the distributable contents without publishing:

```sh
npm pack --dry-run
```

## License

[MIT](LICENSE)
