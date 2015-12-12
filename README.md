# Built in Sherbrooke

**A collection of Sherbrooke's best tech companies, startups, agencies, resources, and events.**

Everything for the site is available to be modified here. To submit a company/agency/startup/investor, [fork the repo and submit a pull-request](#how-to-add-a-company) with the changes. Same deal for making any changes to existing entries.

## How to add a company

To add your entry, follow [the steps for forking the repo and creating a pull-request][fork repo] and update the `data/entries.yml` file with your entry's information. The mandatory information to include is:

```
- name: Entry Name
  category: company | agency | resource | event
  url: www.name.com
  description: Some nice description about the entry. Preferrably between 125-175 characters. Like a long tweet.
```

Optionally, you can add:

```
- ...
  ...
  twitter: entryname
  facebook: entryname
```

Save your entry at the bottom of the file (use spaces for the indentation, not tabs — YAML doesn't like tabs). Note a couple of guidelines (also see the existing entries for a better idea of what to write):

1. **category**: Use singular categories (event instead of events). Only list each entry as one, otherwise you might break something.

2. **url**: Don't put in the `https://` or `http://`. Preferably, don't put in the `/en` or `/fr` either (if it's a bilingual site) — just link to the root domain since it will likely be the more popular version.

3. **description**: Ease off the *marketing lingo* and definitely leave off the *investor speak* (ie there better not be any appearences of 'digital solution' or 'synergy' anywhere in your description). Use the [third-person narrative](http://en.wikipedia.org/wiki/Third_person) preferrably (ie. don't say 'Shopify is the best platform for YOU to build an online store').

4. **twitter** (optional): leave off the `@`. Preferrably all lowercase.

5. **facebook** (optional): preferrably all lowercase.

As for the image/logo, fire up Photoshop and [download this template PSD](http://cl.ly/T8j5). If you turn on the guidelines, make sure your logo fits inside the inner guidelines and is roughly centered. Preferrably, use a background color other than white (it makes your company standout more and looks less boring). Save the image as a JPEG. **Put the logo in the `source/assets/images/entries/` directory**.

**Commit and push. Then open up a pull-request.** If the pull-reqest is approved, it will be merged and pushed live.

**If this all sounds too technical**, feel free to [create an issue][create an issue] with the same information (logo, name, description, etc.) and one of the maintainers will add it in when they get time.

## Contributors

 - Mathieu Allaire ([Twitter](https://twitter.com/allaire), [Site](http://www.mathieuallaire.ca/), [Work](http://www.agendrix.com/), [GitHub](https://github.com/lukechesser))

## Attribution

Thanks to Luke Chesser ([Twitter](https://twitter.com/lukechesser), [Blog](http://imluke.me/), [Dribbble](http://dribbble.com/lukechesser), [GitHub](https://github.com/lukechesser)) for his work on [Montreal Collective](https://github.com/lukechesser/montreal-collective/). Some code was re-used as well as the overall look.

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[fork repo]: https://help.github.com/articles/fork-a-repo
[create an issue]: https://github.com/allaire/builtinsherbrooke
