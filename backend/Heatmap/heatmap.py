import pandas


def get_heatmap_data():
    heatmaps = pandas.read_csv('Heatmap/heatmap.csv')

    heatmap_json = {}
    for index, row in heatmaps.iterrows():
        heatmap_json[row['state']] = {
            'state': row['state'],
            'home': row['home'],
            'homeoffice': row['homeoffice']
        }
    return heatmap_json
