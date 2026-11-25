# Brief for the Tidepool field log toolbar

Tidepool is a fictional field notebook for coastal survey volunteers. Its toolbar needs four original icons. In the full toolbar each icon sits beside its label at 24 px. In the compact toolbar the icon shrinks to 16 px and the control keeps the same accessible name.

Use a 24 × 24 view box, 2-unit outline strokes, rounded caps and joins, and a single color inherited from the parent. The four controls share that treatment, and each needs a recognizable silhouette at 16 px.

| Control label | File | Drawing decision |
| --- | --- | --- |
| Add sighting | [add-sighting.svg](add-sighting.svg) | Put the plus inside a location pin. The pointed base keeps it distinct from the jar. |
| Route log | [route-log.svg](route-log.svg) | Use a stepped path with round endpoints. This makes the route read as a path through points. |
| Samples | [sample-jar.svg](sample-jar.svg) | Draw a broad jar with a screw cap and a single fill line. The cap differentiates it from the notebook. |
| Export notebook | [export-notebook.svg](export-notebook.svg) | Open the right edge of a small notebook silhouette around an outward arrow so the two strokes stay separate. |

The filenames describe the controls, and the visible labels carry the precise action. The compact toolbar should use the same names on its buttons. When you inline the SVGs inside those buttons, set the icons to `aria-hidden="true"` and size them in CSS.

Check the four together at 16 px and 24 px against the UI's light and dark surfaces. Pay attention to the gap between the plus and the pin and the spacing between the arrow and the notebook.
