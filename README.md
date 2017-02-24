# CWRC Field Filler

This is a module that automatically fills an additional field using
an autocomplete field.

## Usage

This module provides an additional autocomplete endpoint to supplement the
endpoints provided by the [Islandora Entities](https://github.com/Islandora/islandora_solution_pack_entities)
endpoints.  If you specify one of these endpoints the autocomplete will
automatically return the URI as well and attempt to fill any input in the same
fieldset that is named "valueURI" (label can be anything), with the URI.

These endpoints are:

- cwrc/entities/autocomplete/mods_title
- cwrc/entities/autocomplete/mods_author
- cwrc/entities/autocomplete/mods_corporate_author
- cwrc/entities/autocomplete/mods_place_of_publication
- cwrc/entities/autocomplete/mods_publisher
